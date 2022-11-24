import Hospital from "../../Models/Hospital";

export default async function handler(req, res) {
    try {
        const hospitals = await Hospital.findAll().then(hospitals => {
            const arr = [];
            hospitals.forEach(hospital => {
                arr.push(hospital.dataValues);
            });
            return arr;
        });
        res.status(200).json(hospitals);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

