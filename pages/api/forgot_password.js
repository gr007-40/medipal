import User from '../../Models/User';
import {signJWT} from '../../utils';
// import sendMail from '../../utils';

export default async function handler(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } }).then((user)=>{return user.dataValues});
    if ((await user.email) === req.body.email) {
        const jwt = await signJWT({ user: user, maxAge: '30m' });
        return {
            from: 'abdullahilkafi@iut-dhaka.edu',
            to: user.email,
            subject: 'Password Reset',
            text: 'A password reset has been requested from this email. Please avoid this if it was not intended.',
            html: `<p>To reset your password, click <strong><a href='https://${process.env.HOST}:${process.env.PORT}/reset_password/?token=${await jwt}'>here</a></strong></p>`,
        };
        // return await sendMail(message);
    }else return {message: 'internal error'};
}
