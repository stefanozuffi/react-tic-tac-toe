import cells from "../data/cells";

export default function CleanBoard() {
    cells.forEach(cell => {
        cell.occupied = false
        cell.value = null
    })
}