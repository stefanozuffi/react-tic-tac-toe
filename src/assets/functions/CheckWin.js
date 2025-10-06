import cells from "../data/cells"

export default function CheckWin() {

    //Winning Conditions
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [2,5,8],
        [1,4,7],
        [0,3,6]
    ]

    const activeX = cells.filter(cell => cell.value == 1).map(cell => cell.id)
    const activeO = cells.filter(cell => cell.value == 0).map(cell => cell.id)

   const win = {
        res: false,
        player: null
    }
    

    winConditions.forEach(condition => {

        if (condition.every(x => activeX.includes(x))) {
            win.res = true
            win.player = 1
        }
        if (condition.every(x => activeO.includes(x))) {
            win.res = true
            win.player = 0
        }

    })
    return win

}