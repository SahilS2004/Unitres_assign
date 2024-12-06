import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const PageConfig = sequelize.define('PageConfig', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  layout: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('User', 'Manager', 'Admin'),
    allowNull: false,
  },
});

export default PageConfig;

