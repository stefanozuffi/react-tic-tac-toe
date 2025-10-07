import Cell from "./Cell";
import initialBoard from "../data/cells";
import { CheckWin,CheckDraw } from "../functions/CheckWin";
import { useState } from "react";
import ResetUI from "./ResetUI";

export default function Board() {
    const [activePlayer, setActive] = useState(0)
    const [cells, setCells] = useState(initialBoard)

    //HandleClick of cells
    function handleClick(e) {
        const thisCellID = parseInt(e.currentTarget.getAttribute('data-id'))
        const thisCell = cells.find(cell => cell.id === thisCellID)
        console.log(`Clicked cell ${thisCellID}`)

        if (!thisCell.occupied) {
            setCells(prevCells => prevCells.map(cell => 
                cell.id === thisCellID ? {...cell, occupied: true, value: activePlayer} : cell
                )
            
            )

            setActive(1 - activePlayer)
        }
    }

    const gameResult = CheckWin(cells)
    const draw = CheckDraw(cells)

    return(
        <div className="board container">
            {
                cells.map(cell => 
                    <Cell id={cell.id} handleF={handleClick} value={cell.value} key={cell.id}/>
                )
            }
            <ResetUI checkwin={gameResult.res} draw={draw} winner={gameResult.player} handleR={() => setCells(initialBoard)}/>
        </div>
    )
}