//add a record of user to the users table in database
import { setCookie } from "cookies-next";
import bcrypt from "bcrypt";
import { signJWT } from "../../utils";
import User from "../../Models/User";
import Schedule from "../../Models/Schedule";
import Doctor from "../../Models/Doctor";
//send successfull signup message to the frontend along with the user id and a jwt token with expiry date
export default async function handler(req, res) {
  const usereq = req.body;
  const user = await User.create({
    name: usereq.name,
    phone: usereq.phone,
    gender: usereq.gender,
    bloodGroup: usereq.bloodGroup,
    age: usereq.age,
    email: usereq.email,
    isDoctor: usereq.isDoctor === "true",
    isHospitalAdmin: usereq.isHospitalAdmin === "true",
    passHash: bcrypt.hashSync(usereq.password, Number(process.env.SALT)),
  })
    .then((user) => {
      return user.dataValues;
    })
    .catch((error) => {
      console.log(error);
      res.status(405).json({ success: false });
      return;
    });
  if (await user.isDoctor) {
    const doctor = await Doctor.create({
      name: user.name,
      userID: user.id,
    })
      .then((doctor) => {
        return doctor.dataValues;
      })
      .catch((error) => {
        console.log(error);
        res.status(405).json({ success: false });
        return;
      });
    await Schedule.create({
      day: "Saturday",
      doctorID: doctor.id,
    });
    await Schedule.create({
      day: "Sunday",
      doctorID: doctor.id,
    });
    await Schedule.create({
      day: "Monday",
      doctorID: doctor.id,
    });
    await Schedule.create({
      day: "Tuesday",
      doctorID: doctor.id,
    });
    await Schedule.create({
      day: "Wednesday",
      doctorID: doctor.id,
    });
    await Schedule.create({
      day: "Thursday",
      doctorID: doctor.id,
    });
    await Schedule.create({
      day: "Friday",
      doctorID: doctor.id,
    });
  }
  const jwt = await signJWT({ user: await user });

  setCookie("token", jwt, { req, res });
  res.status(200).json({ success: true, token: jwt });
  return;
}
