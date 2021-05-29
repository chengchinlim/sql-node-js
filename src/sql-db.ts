// import mysql from 'mysql2'
import {Sequelize} from "sequelize";

const sqlDb = new Sequelize('test', 'root',
    process.env.GOOGLE_CLOUD_SQL_ROOT_PASSWORD, {
        host: process.env.GOOGLE_CLOUD_SQL_HOSTNAME,
        dialect: 'mysql'
    })

export {
    sqlDb
}