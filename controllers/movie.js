
const { movies } = require('../models')

// const { move } = require('../app')

const getMovies = async () => {
    try {
        let allMovies = await movies.findAll()
        return allMovies
    } catch (error) {
        throw new Error(`Eyab : ${error.message}`)
    }
}

const newMovieCont = async (movie)=>{
    try {
        const newMovie = await movies.create({
            id:movie.id,
            name:movie.name,
            category:movie.category,
            length:movie.length,
            producer:movie.producer
        })
        return 'נוצר בהצלחה'
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}


module.exports = { getMovies,newMovieCont }