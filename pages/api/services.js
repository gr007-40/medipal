import Service from '../../Models/Service';

export default async function handler(req, res) {
    try {
        const services = await Service.findAll().then(services=>{
            const arr=[];
            services.forEach(i=>{
                arr.push(i.dataValues);
            })
            return arr;
        });
        res.status(200).json(services);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

