import Appointment from '../../Models/Appointment'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export default function handler(req, res) {
    const date = new Date(req.body.date);
    const doctor = req.body.doctor;
    const user = req.body.patient;
    let schedule;
    doctor.schedule.forEach(i => {
        if (i.day === days[date.getDay()]) {
            console.log(i);
            schedule = i;
        }
    })
    const hospital_id = schedule.hospitalID;

    Appointment.create({
        userID: user.id,
        doctorID: doctor.id,
        date: date,
        hospitalID: hospital_id
    }).then(_ => {
        res.status(200).json({message: 'ok'})
    }).catch(err => console.log(err))

}
