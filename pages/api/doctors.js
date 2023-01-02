import Doctor from '../../Models/Doctor';

export default async function handler(req, res) {
    const doctors = await Doctor.findAll().then(doctors => {
        const arr = [];
        doctors.forEach(doctor => {
            arr.push(doctor.dataValues);
        });
        return arr;
    });
    res.status(200).json(doctors);
}