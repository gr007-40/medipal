import DataTypes from 'sequelize';
import {sequelize} from '.';

sequelize.sync();

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    bloodGroup: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    isDoctor: {
        type: DataTypes.BOOLEAN,
        default: false,
    },
    isHospitalAdmin: {
        type: DataTypes.BOOLEAN,
        default: false,
    },
    phone: DataTypes.STRING,
    passHash: {
        type: DataTypes.STRING,
        notNull: true,
    }
});

export default User;