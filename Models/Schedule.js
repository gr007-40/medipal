import DataTypes from 'sequelize';
import { sequelize } from '.';
import Doctor from "./Doctor";
import Hospital from "./Hospital";

sequelize.sync();

const Schedule = sequelize.define('Schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    day: DataTypes.STRING,
    hospitalID:{
        type: DataTypes.INTEGER,
        foreignKey: {
            reference: {
                key: 'id',
                model: Hospital
            },
            allowNull: true,
            onDelete: 'NO ACTION'
        }
    },
    doctorID:{
        type: DataTypes.INTEGER,
        foreignKey: {
            reference: {
                key: 'id',
                model: Doctor
            },
            allowNull: false,
            onDelete: 'NO ACTION',
        }
    }
});

export default Schedule;
