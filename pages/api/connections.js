import user_login from "../../Models/userLogin";


const Sequelize = require("sequelize");

const sequelize = new Sequelize('medipal', 'root', 'MariaDB', {host: '127.0.0.1', port: 3306, dialect: "mariadb"});

export default async function handler(req, res) {
    //await user_login.create({
    // user_email_id: 'tania@gmail.com',
    // password: 'qwerty'
    //  })
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
