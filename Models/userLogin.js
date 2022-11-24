import DataTypes from 'sequelize';
import sequelize from '.';

sequelize.sync();

const user_login = sequelize.define('user_login', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_email_id: {
        type: DataTypes.STRING,
        unique: true,
    },
    password:
        {
            type: DataTypes.STRING,
        }
}, {
    tableName: 'user_login'
});

// user_login.create({
//     user_email_id: "shinchan@gmail.com",
//     password: 'qwerty'
// })

export default user_login;
  
  

