import {sequelize} from "./index";
import DataTypes from "sequelize";

sequelize.sync();

const Service = sequelize.define("Service", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    careline: DataTypes.STRING,
});

export default Service;
