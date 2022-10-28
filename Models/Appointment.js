import DataTypes from 'sequelize';
import { sequelize } from '.';
import Doctor from "./Doctor";
import Hospital from "./Hospital";
import User from "./User";

sequelize.sync();

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    day: DataTypes.STRING,
    hospitalID:{
        foreignKey: {
            type: DataTypes.INTEGER,
            reference: {
                key: 'id',
                model: Hospital
            },
            allowNull: true,
            onDelete: 'NO ACTION'
        }
    },
    doctorID:{
        foreignKey: {
            type: DataTypes.INTEGER,
            reference: {
                key: 'id',
                model: Doctor
            },
            allowNull: false,
            onDelete: 'NO ACTION',
        }
    },
    userID:{
        type: DataTypes.INTEGER,
        foreignKey:{
            reference:{
                key: 'id',
                model: User
            },
            allowNull: false,
            onDelete: 'NO ACTION'
        }
    }
});

export default Appointment;
