import Doctor from "../../Models/Doctor";
import User from "../../Models/User";
import Schedule from "../../Models/Schedule";
import { postData } from "../../utils";

export default async function handler(req, res) {
  const id = await postData("http://localhost:3000/api/verify", {}).then(
    (user) => {
      console.log(user);
      if (user.isVerified && user.isDoctor) {
        return user.id;
      } else {
        return;
      }
    }
  );
  console.log(await id);
  const user = await User.findByPk(await id).then((user) => {
    console.log(user);
    return user.dataValues;
  });
  const doctor = await Doctor.findOne({
    where: { userID: await user.id },
  }).then((doctor) => {
    return doctor.dataValues;
  });
  const schedule = await Schedule.findAll({
    where: { doctorID: await doctor.id },
  }).then((schedules) => {
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
