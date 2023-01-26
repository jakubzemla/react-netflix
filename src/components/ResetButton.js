import './ResetButton.css'

const ResetButton = (props) => {
    return (
        <button className="reset-btn" onClick={props.resetChanges}>Resetovať všetky úpravy</button>
    )
}

export default ResetButton