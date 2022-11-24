import DataTypes from 'sequelize';
import {sequelize} from '.';
import User from "./User";

sequelize.sync();

const Doctor = sequelize.define('Doctor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    speciality: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    userID: {
        type: DataTypes.INTEGER,
        foreignKey: {
            reference: {
                key: 'id',
                model: User
            },
            allowNull: false,
            onDelete: 'CASCADE',
        }
    }
});

export default Doctor;
