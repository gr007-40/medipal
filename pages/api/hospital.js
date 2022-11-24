import Hospital from '../../Models/Hospital'
import Doctor from "../../Models/Doctor";
import Schedule from "../../Models/Schedule";

export default async function handler(req, res) {
  const hospital_id = req.body.hospital_id;
  try {
    const hospital = await Hospital.findByPk(hospital_id).then(hospital=>hospital.dataValues);
    const schedules = await Schedule.findAll({where:{hospitalID:hospital_id}}).then(schedules=>{
      const arr = [];
      schedules.forEach(schedule=>{
        arr.push(schedule);
      });
      return arr;
    });
    const doctors = [];
    for (const schedule of schedules) {
      const doctor = await Doctor.findByPk(schedule.doctorID).then(doctor=>doctor.dataValues);
      doctors.push(doctor);
    }
    res.status(200).json({hospital:await hospital,doctors:doctors})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
