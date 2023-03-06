export default(db: any, Sequelize: any) => {
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
    },
        {
            timestamps: true
        }
    )
    return products
}