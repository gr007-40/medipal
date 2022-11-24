import {sequelize} from "../../Models";

export default async function handler(req, res) {
    try {
        const query = await sequelize.query(
            "select service_id,name,address,careline,image from Services",);
        res.status(200).json({services: await query[0]});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

