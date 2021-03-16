import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Borrow = sequelize.define('borrowing', {
    member_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    member_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
    date_borrowed: {
        type: Sequelize.DATE,
        allowNull: false
    },
    return_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    
}, {
    sequelize,
    tableName: 'borrowing',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "member_id" }
        ]
    }]
});

export default Borrow;