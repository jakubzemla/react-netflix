import './BackButton.css'

const BackButton = (props) => {
    if (props.showStepBack) {
        return (
            <button className="back-btn" onClick={props.getStepBack}>Vrátiť krok späť</button>
        )
    }
}

export default BackButton