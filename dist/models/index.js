"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const sequelize_1 = require("sequelize");
const connect_1 = __importDefault(require("./connect"));
var db = {};
db.Sequelize = sequelize_1.Sequelize;
db.connect = (0, connect_1.default)(config_1.default);
const database = require('./database');
db.users = database.users(db.connect, db.Sequelize);
db.products = database.products(db.connect, db.Sequelize);
exports.default = db;
//# sourceMappingURL=index.js.map