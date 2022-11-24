import DataTypes from 'sequelize';
import {sequelize} from '.';
import Service from "./Service";
import Hospital from "./Hospital";

sequelize.sync();

const Lab = sequelize.define('Lab', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hospitalID: {
        type: DataTypes.INTEGER,
        foreignKey: {
            reference: {
                key: 'id',
                model: Hospital
            },
            allowNull: true,
            onDelete: 'CASCADE'
        }
    },
    serviceID: {
        type: DataTypes.INTEGER,
        foreignKey: {
            reference: {
                key: 'id',
                model: Service
            },
            allowNull: false,
            onDelete: 'NO ACTION',
        }
    }
});

export default Lab;
