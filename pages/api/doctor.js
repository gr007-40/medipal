import Doctor from '../../Models/Doctor';
import Degree from '../../Models/Degree'
import Schedule from '../../Models/Schedule';

export default async function handler(req, res) {
    const uid = req.body.uid;
    const doctor = await Doctor.findOne({
        where: {userID: uid},
    }).then((doctor) => {
        if (doctor)
            return doctor.dataValues;
        else {
            res.status(500).json({found: false})
        }
    });
    const schedule = await Schedule.findAll({
        where: {doctorID: await doctor.id},
    }).then((schedules) => {
        const arr = [];
        schedules.forEach((i) => {
            arr.push(i.dataValues);
        });
        return arr;
    });
    const degree = await Degree.findAll({where: {doctorID: await doctor.id}}).then((degrees) => {
        const arr = [];
        degrees.forEach((i) => {
            arr.push(i.dataValues);
        });
        return arr;
    });
    res.status(200).json({
        id: await doctor.id,
        name: await doctor.name,
        specialization: await doctor.specialization,
        profilePicture: await doctor.profilePicture,
        userID: await doctor.userID,
        degrees: degree,
        schedule: schedule,
    });

}
