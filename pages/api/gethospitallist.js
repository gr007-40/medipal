import mariadb from "mariadb/promise";
const Sequelize=require("sequelize");
import success from "../../components/success";

const sequelize= new Sequelize('medipal','root','MariaDB',{host:'127.0.0.1',port:3306,dialect:"mariadb"});
export default async function handler(req,res){
  try {
   

    const query = await sequelize.query(
        "select * from hospital_list",);
        res.status(200).json({hospital_list:await query[0]});n
       //success();
        
  }
   catch (error) {
 
    // unhide to check error
    res.status(500).json({ error: error.message });
 // }
}
}

