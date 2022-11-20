import {getCookie, hasCookie} from 'cookies-next';
import {jwtVerify} from 'jose';
import User from '../../Models/User';

export default async function handler(req, res) {
    let jwt = '';
    if (hasCookie('token', {req, res})) {
        jwt = getCookie('token', {req, res});
    } else if (req.body.token) {
        jwt = req.body.token;
    } else {
        res.status(200).json({isVerified: false});
        return;
    }
    const payload = await jwtVerify(
        jwt,
        new TextEncoder().encode(process.env.SECRET)
    )
        .then((decoded) => {
            return decoded.payload;
        })
        .catch(console.error);
    const user = await User.findOne({where: {id: await payload.id}})
        .then((user) => {
            return user.dataValues;
        })
        .catch(console.error);
    res.status(200).json({
        isVerified: true,
        id: await user.id,
        name: await user.name,
        isDoctor: await user.isDoctor,
        isHospitalAdmin: await user.isHospitalAdmin,
        // profileImage: await user.proPic,
    });

}
