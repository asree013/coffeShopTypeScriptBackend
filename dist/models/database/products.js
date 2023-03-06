"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (db, Sequelize) => {
    const products = db.define('products', {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: { type: Sequelize.STRING },
        stock: { type: Sequelize.STRING },
        price: { type: Sequelize.STRING },
        detail: { type: Sequelize.STRING }
    }, {
        timestamps: true
    });
    return products;
};
//# sourceMappingURL=products.js.map