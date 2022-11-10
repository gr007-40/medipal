import Doctor from "../../Models/Doctor";
import User from "../../Models/User";
import Schedule from "../../Models/Schedule";
import { postData } from "../../utils";

export default async function handler(req, res) {
  const id = await postData("/api/verify", {}).then((user) => {
    if (user.isVerified) {
      return user.id;
    } else {
      res.status(405).json({ isVerified: false });
      return;
    }
  });
  const user = await User.findByPk(await id).then((user) => {
    return user.dataValues;
  });
  const doctor = await Doctor.findOne({ where: { userID: user.id } }).then(
    (doctor) => {
      return doctor.dataValues;
    }
  );
  const schedule = await Schedule.findAll({
    where: { doctorID: doctor.id },
  }).then((schedules) => {
    return schedules;
  });
  console.log(schedule);
  res.status(200).json({
    id: await doctor.id,
    name: await doctor.name,
    specialization: await doctor.specialization,
    profilePicture: await doctor.profilePicture,
    schedule: schedule,
  });
  return;
}

