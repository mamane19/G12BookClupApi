import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";


const Member = sequelize.define('member', {
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
    member_gender: {
        type: Sequelize.STRING(6),
        allowNull: false
    },
    member_email: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    member_phone: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    member_dob: {
        type: Sequelize.DATE,
        allowNull: false
    },
    member_address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    member_referralId: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'members',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "member_id" }
        ]
    }]
});

export default Member;