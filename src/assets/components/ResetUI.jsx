export default function ResetUI(props) {

    return(
        <div className={`reset-pop-up hidden ${props.checkwin || props.draw ? 'show' : ''}`}>
            {props.draw ? <h2>IT IS A DRAW!</h2> : <h2>{`${props.winner == 1 ? 'X' : 'O'} HAS WON!`}</h2>}

            <button className="btn" onClick={props.handleR}> RESTART </button>
        </div>
    )
}