import {sequelize} from "../../Models";

export default async function handler(req, res) {
    try {
        const query = await sequelize.query(
            "select *from Services",);
        res.status(200).json({service_details: await query[0]});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
