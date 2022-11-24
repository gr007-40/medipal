import user_login from "../../Models/userLogin";

export default async function handler(req, res) {
    const userlogin = await user_login.findOne({
        where: {
            user_email_id: req.body.user_email,
            password: req.body.password
        }
    });
    if (userlogin === null) {
        console.log('Not found!');
    } else {
        console.log("USER FOUND"); // true
        console.log(await userlogin); // 'My Title'
        res.status(200).json(await userlogin);
    }
};
