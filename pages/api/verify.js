import { getCookie, hasCookie } from 'cookies-next';
import { jwtVerify } from 'jose';
import User from '../../Models/User';

export default async function handler(req, res) {
    if (hasCookie('token', { req, res })) {
        const jwt = getCookie('token', { req, res })
        const { payload } = await jwtVerify(
            jwt,
            new TextEncoder().encode(process.env.SECRET)
        ).catch(console.error);
        const user = await User.findOne({ where: { id: payload.id } }).then(_=>{return user.dataValues;}).catch(_=>{});
        res.status(200).json({
            isVerified: true,
            id: await user.id,
            name: await user.name,
            isDoctor: await user.isDoctor,
            isHospitalAdmin: await user.isHospitalAdmin,
            // profileImage: await user.proPic,
        });
    } else {
        res.status(200).json({ isVerified: false });
    }
}
