export default (db: any, Sequelize: any) => {
    const users = db.define('users', {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: { type: Sequelize.STRING },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        mail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: { type: Sequelize.STRING },
        idCard: { type: Sequelize.STRING },
        image: { type: Sequelize.STRING },
        role: { type: Sequelize.STRING, defaultValue: 'users' }
    },
        {
            timestamps: true
        }
    )
    return users
}


//can you create medels node ts use Sequelize ORM mysql and relationship data 