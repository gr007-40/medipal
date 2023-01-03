import mariadb from "mariadb/promise";

const Sequelize=require("sequelize");

// const sequelize= new Sequelize('medipal','root','MariaDB',{host:'127.0.0.1',port:3306,dialect:"mariadb"});
const sequelize= new Sequelize(process.env.DATABASE_URL);
export default async function handler(req,res){
    try {


        const query = await sequelize.query(
            "select * from Hospitals",);
        const query2 = await sequelize.query(
            "select * from Doctors",);
        res.status(200).json({hospital_list:await query[0],doctors:await query2[0]});
        //success();

    }
    catch (error) {

        // unhide to check error
        res.status(500).json({ error: error.message });
        // }
    }
}

