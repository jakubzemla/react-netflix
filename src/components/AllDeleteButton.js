import './AllDeleteButton.css'

const AllDeleteButton = (props) => {
    return (
        <button className="all-delete-btn" onClick={props.deleteAll}>Vymazať celý zoznam</button>
    )
}

export default AllDeleteButton