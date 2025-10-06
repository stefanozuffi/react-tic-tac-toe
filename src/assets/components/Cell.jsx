export default function Cell(props) {
    return(
        <div className="cell" onClick={props.handleF} data-id={props.id}>
            {props.value == 1 && <p>X</p>}
            {props.value == 0 && <p>0</p>}
        </div>
    )
}