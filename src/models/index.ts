import dbConfig from './config'
import { Sequelize } from 'sequelize';
import connect from './connect';

var db: any = {}

db.Sequelize = Sequelize
db.connect = connect(dbConfig)

const database = require('./database')

db.users = database.users(db.connect, db.Sequelize)
db.products = database.products(db.connect, db.Sequelize)

export default db