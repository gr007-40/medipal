import {sequelize} from "./index";
import DataTypes from "sequelize";

sequelize.sync();

const Hospital = sequelize.define("Hospital",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING
});

export default Hospital;