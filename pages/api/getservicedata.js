import mariadb from "mariadb/promise";
const Sequelize=require("sequelize");
import success from "../../components/success";

const sequelize= new Sequelize('medipal','root','hello123',{host:'127.0.0.1',port:3306,dialect:"mariadb"});
export default async function handler(req,res){
    //res.status(200).json({name:"sasa" });
  try {
   

    const query = await sequelize.query(
        "select service_id,name,address,careline,image from services",);
       // const [data] =  sequelize.execute(query,[]);
        //sequelize.end();
        //res.json({results:data});
      //  console.log("USER FOUND"); // true
        //console.log(await query); // 'My Title'
        res.status(200).json({services:await query[0]});
       //success();
        
  }
   catch (error) {
 
    // unhide to check error
    res.status(500).json({ error: error.message });
 // }
}
}

