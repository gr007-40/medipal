import User from '../../Models/User';
import Appointment from '../../Models/Appointment';
import Doctor from '../../Models/Doctor'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default async function handler(req, res) {
    const user = await User.findByPk(req.body.id).then((user) => {
        return user.dataValues;
    });
    const appointments = await Appointment.findAll({
        where: {userID: user.id},
    }).then(async (appointments) => {
        const arr = [];
        for (const i of appointments) {
            const doctor = await Doctor.findByPk(i.dataValues.doctorID).then(j => {
                return j.dataValues;
            });
            const hospital = await Doctor.findByPk(i.dataValues.hospitalID).then(j => {
                return j ? j.dataValues : null;
            }).catch(err => {
                console.log(err);
                return null;
            });
            arr.push({
                id: i.dataValues.id,
                day: days[i.dataValues.date.getDay()],
                hospital: await hospital ? await hospital.name : '',
                doctor: await doctor.name
            })
        }
        console.log(arr);
        return arr;
    });
    console.log(appointments);
    res.status(200).json({
        id: await user.id,
        name: await user.name,
        age: await user.age,
        gender: await user.gender,
        bloodGroup: await user.bloodGroup,
        profilePicture: await user.profilePicture,
        appointments: appointments,
    });
}
