import { useState } from 'react'


import './Movie.css'
import data from '../data'
import MovieDeleteButton from './MovieDeleteButton'
import AllDeleteButton from './AllDeleteButton'
import ResetButton from './ResetButton'
import BackButton from './BackButton'


const Movie = () => {
    const [moviesList, setMoviesList] = useState(data)
    const [lastList, setLastList] = useState([])
    const [showStepBack, setShowStepBack] = useState(false)

    const deleteFromList = (id) => {
        setShowStepBack(true)
        setLastList(lastList.concat([moviesList]))
        const filteredMovies = moviesList.filter( (oneMovie) => {
            return oneMovie.id !== id
        })
        setMoviesList(filteredMovies)
    }

    const deleteAll = () => {
        setMoviesList([])
    }

    const resetChanges = () => {
        setMoviesList(data)
        setLastList([])
        setShowStepBack(false)
    }

    const getStepBack= () => {
        setMoviesList(lastList[lastList.length - 1])
        setLastList(lastList.slice(0, -1))
        if (lastList.length === 1) {
            setShowStepBack(false)
        }
    }

    return (
    <section className="must-watch">
        <h1 className="page-title">Môj zoznam "Must-watch"</h1>
        <div className="all-movies">
            {
                moviesList.map( (oneMovie) => {
                    const {id, image, title, age, tags, description} = oneMovie

                    return <div className="one-movie" key={id}>
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton deleteFromList={() => deleteFromList(id)}/>
                    </div>
                })
            }
        </div>
        <div className="bottom-menu">
            <AllDeleteButton deleteAll={deleteAll}/>
            <ResetButton resetChanges={resetChanges}/>
            <BackButton getStepBack={getStepBack} showStepBack={showStepBack}/>
        </div>
    </section>
    )
}

export default Movie