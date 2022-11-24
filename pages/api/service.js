import Lab from "../../Models/Lab";
import Hospital from "../../Models/Hospital";
export default async function handler(req,res){
    const service_id = req.body.service_id;
    const labs = await Lab.findAll({where:{serviceID:service_id}}).then(labs=>{
        const arr = [];
        labs.forEach(i=>{
            arr.push(i.dataValues);
        });
        return arr;
    })
    const hospitals = [];
    labs.forEach(lab=>{
        const hospital = Hospital.findByPk(lab.hospitalID).then(i=>i.dataValues);
        hospitals.push(hospital);
    });
    res.status(200).json({hospitals: hospitals});
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