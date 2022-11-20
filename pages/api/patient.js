import User from "../../Models/User";
import Appointment from "../../Models/Appointment";

export default async function handler(req, res) {
    const user = await User.findByPk(req.query.id).then((user) => {
        return user.dataValues;
    });
    const appointments = await Appointment.findAll({
        where: {userID: user.id},
    }).then((appointments) => {
        return appointments;
    });
    console.log(appointments);
    res.status(200).json({
        id: await user.id,
        name: await user.name,
        age: await user.age,
        gender: await user.gender,
        profilePicture: await user.profilePicture,
        appointments: appointments,
    });

}

