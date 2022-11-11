import Doctor from "../../Models/Doctor";
import User from "../../Models/User";
import Schedule from "../../Models/Schedule";
import { postData } from "../../utils";
import { getCookie } from "cookies-next";

export default async function handler(req, res) {
  const jwt = getCookie("token", { req, res });
  console.log(jwt);
  const id = await postData("http://localhost:3000/api/verify", {
    token: jwt,
  }).then((user) => {
    console.log(user);
    if (user.isVerified && user.isDoctor) {
      return user.id;
    } else {
      return;
    }
  });
  console.log(await id);
  const user = await User.findByPk(await id).then((user) => {
    console.log(user.dataValues);
    return user.dataValues;
  });
  const doctor = await Doctor.findOne({
    where: { userID: await user.id },
  }).then((doctor) => {
    console.log(doctor.dataValues);
    return doctor.dataValues;
  });
  const schedule = await Schedule.findAll({
    where: { doctorID: await doctor.id },
  }).then((schedules) => {
    console.log(schedules.dataValues);
    return schedules;
  });
  console.log(await schedule);
  res.status(200).json({
    id: await doctor.id,
    name: await doctor.name,
    specialization: await doctor.specialization,
    profilePicture: await doctor.profilePicture,
    schedule: await schedule,
  });
  return;
}
