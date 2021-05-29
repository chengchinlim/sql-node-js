
import {sqlDb} from "./sql-db";
const Sequelize = require('sequelize')

const player = sqlDb.define('player', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER
    },
    rating: {
        type: Sequelize.INTEGER
    },
    heightInMeters: {
        type: Sequelize.DECIMAL
    },
    weightInKg: {
        type: Sequelize.DECIMAL
    }
})

export {
    player
}