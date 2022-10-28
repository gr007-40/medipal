//add a record of user to the users table in database
import User from '../../Models/User';
import bcrypt from 'bcrypt';
import { signJWT } from '../../utils';
import { setCookie } from 'cookies-next';
//send successfull signup message to the frontend along with the user id and a jwt token with expiry date
export default async function handler(req, res) {
    return new Promise(async (resolve,reject)=>{
        const user = await User.findOne({ where: { email: req.body.email } }).then((user)=>{
            return user.dataValues;
        }).catch(error=>{
            console.log(error);
            res.status(405).json({success: false}).end();
            resolve();
        });
        const success = bcrypt.compareSync(
            req.body.password,
            await user.passHash
        );
        if (await success) {
            const jwt = await signJWT({ user: await user});
            setCookie('token', jwt, { req, res });
            res.status(200);
        }else{
            res.status(405);
        }
        res.json({state: await success}).end()
        resolve()
    })

}
