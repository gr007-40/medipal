import User from "../../Models/User";
import bcrypt from "bcrypt";
import {signJWT} from "../../utils";
import {setCookie} from "cookies-next";

export default async function handler(req, res) {
    const user = await User.findOne({where: {email: req.body.email}})
        .then((user) => {
            return user.dataValues;
        })
        .catch((error) => {
            console.log(error);
        });
    const success = bcrypt.compareSync(req.body.password, await user.passHash);
    if (success) {
        const jwt = await signJWT({user: await user});
        setCookie("token", jwt, {req, res});
        res.status(200).json({success: true});

    } else {
        res.status(405).json({success: false});

    }
}
