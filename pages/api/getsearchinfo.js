import Hospital from "../../Models/Hospital";
import Doctor from "../../Models/Doctor";

export default async function handler(req, res) {
    const hospitals = Hospital.findAll().then(hospitals => {
        const arr = [];
        hospitals.forEach(hospital => {
            arr.push(hospital);
        })
        return arr;
    })
    const doctors = Doctor.findAll().then(doctors => {
        const arr = [];
        doctors.forEach(doctor => {
            arr.push(doctor);
        })
        return arr;
    })

    res.status(200).json({hospitals: hospitals, doctors: doctors})
}