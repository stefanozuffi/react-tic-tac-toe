export default function ResetUI(props) {

    return(
        <div className={`reset-pop-up hidden ${props.checkwin ? 'show' : ''}`}>
            <h2>{`${props.winner == 1 ? 'X' : 'O'} HAS WON!`}</h2>

            <button className="btn" onClick={props.handleR}> RESTART </button>
        </div>
    )
}