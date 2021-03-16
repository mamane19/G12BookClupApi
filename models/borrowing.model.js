import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";


const Borrowing = sequelize.define('borrowing', {
    borrowing_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    borrower_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    borrowed_title: {
        type: Sequelize.STRING(6),
        allowNull: false
    },
    borrow_date: {
        type: Sequelize.DATE(),
        allowNull: true
    },
    return_date: {
        type: Sequelize.DATE(),
        allowNull: false
    },
    hasreturn:{
        type: Sequelize.BOOLEAN(),
        allowNull: false,
        defaultValue: 0
    }
    
}, {
    sequelize,
    tableName: 'borrowing',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "borrowing_id" }
        ]
    }]
});

export default Borrowing;