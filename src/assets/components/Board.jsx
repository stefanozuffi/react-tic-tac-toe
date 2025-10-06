import Cell from "./Cell";
import cells from "../data/cells";
import CheckWin from "../functions/CheckWin";
import { useState } from "react";

export default function Board() {
    const [activePlayer, setActive] = useState(0)

    function handleClick(e) {
        const thisCell = cells.find(cell => cell.id == e.currentTarget.getAttribute('data-id'))
        console.log(`Clicked cell ${thisCell.id}`)

        if (!thisCell.occupied) {
            
            thisCell.value = activePlayer
            thisCell.occupied = true

            setActive(1 - activePlayer)
        } else {
            console.log('Occupied Cell')
        }

        // Winning Condition 
        if (CheckWin().res) {
            if (CheckWin().player == 1) {
                alert('X WON!')
            }
            alert('O WON!')
        }

        

    }
    return(
        <div className="board container">
            {
                cells.map(cell => 
                    <Cell id={cell.id} handleF={handleClick} value={cell.value} key={cell.id}/>
                )
            }
            
        </div>
    )
}