import Lab from "../../Models/Lab";
import Hospital from "../../Models/Hospital";

export default async function handler(req, res) {
    const service_id = req.body.service_id;
    const labs = await Lab.findAll({where: {serviceID: service_id}}).then(labs => {
        const arr = [];
        labs.forEach(i => {
            arr.push(i.dataValues);
        });
        return arr;
    })
    const hospitals = [];
    for (const lab of labs) {
        const hospital = await Hospital.findByPk(await lab.hospitalID).then(i => i.dataValues);
        hospitals.push(await hospital);
    }
    res.status(200).json(hospitals);
    // const hospitals = Hospital.findAll({
    //     where:{id: Lab.hospitalID},
    //     include:[{
    //         model: Lab,
    //         where: {serviceID: service_id}
    //     }]
    // }).then(hospitals=>{
    //     const arr = [];
    //     hospitals.forEach(i=>{
    //         arr.push(i.dataValues);
    //     });
    //     return arr;
    // });
    // res.status(200).json({hospitals: hospitals});
}