import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";


const Borrow = sequelize.define('borrow', {
    borrow_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    borrower_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    borrowed_title: {
        type: Sequelize.STRING(255),
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
    returned:{
        type: Sequelize.BOOLEAN(),
        allowNull: false,
        defaultValue: 0
    }
    
}, {
    sequelize,
    tableName: 'borrow',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "borrow_id" }
        ]
    }]
});

export default Borrow;