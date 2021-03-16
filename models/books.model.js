import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Books = sequelize.define('member', {
  ID: {
    autoIncrement: true,
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  Title: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  Author: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  Publication_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  ISBN: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  Copies: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Genre: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'books',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "ID" },
      ]
    },
  ]
});

export default Books
