import getAroundCellsCords from "./getAroundCellsCords";

const arr = []

const getAllSafeCellsAround = (x, y, field) => {

    /*.filter(cords => !field[cords.y][cords.x].bomb && !field[cords.y][cords.x].isClicked)*/

    console.log(getAroundCellsCords(x, y, field.length))
    const safeCells = getAroundCellsCords(x, y, field.length).filter(cords => !arr.find((item) => item.x === cords.x && item.y === cords.y))
    arr.push(safeCells)
    console.log(safeCells.length)
    console.log(safeCells)

    //debugger
    if (safeCells.length) {
        const arr2 = safeCells.map(cell => getAllSafeCellsAround(cell.x, cell.y, safeCells))
        console.log(arr2)
    }

    return []

    //if (getAroundCellsCords(x, y, field.length).length)

}

export default getAllSafeCellsAround
