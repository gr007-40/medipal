import DataTypes from 'sequelize';
import {sequelize} from '.';
import Doctor from './Doctor'

sequelize.sync()

const Degree = sequelize.define('Degree', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    value: DataTypes.STRING,
    doctorID: {
        type: DataTypes.INTEGER,
        foreignKey: {
            reference: {
                key: 'id',
                model: Doctor,
            },
            allowNull: true,
            onDelete: 'CASCADE',
        }
    }
});

export default Degree;