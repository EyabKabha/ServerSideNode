module.exports = (db, type) => {
    return db.define('movies', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: type.STRING(30)
        },
        category: {
            type: type.ENUM('kids', 'action', 'horror')
        },
        length: {
            type: type.TIME()
        },
        producer: {
            type: type.INTEGER
        }
    },{timestamps:false, underscored: true})
}