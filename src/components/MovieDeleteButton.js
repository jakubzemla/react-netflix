import './MovieDeleteButton.css'

const MovieDeleteButton = (props) => {
    return (
        <button className="movie-delete-btn" onClick={props.deleteFromList}>Vymazať zo zoznamu</button>
    )
}

export default MovieDeleteButton