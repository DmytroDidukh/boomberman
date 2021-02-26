import getAroundCellsCords from "./getAroundCellsCords";

let arr = []

const getAllSafeCellsAround = (x, y, field) => {

    /*.filter(cords => !field[cords.y][cords.x].bomb && !field[cords.y][cords.x].isClicked)*/

    debugger
    const safeCells = getAroundCellsCords(x, y, field.length)
    debugger
    const safeCells2 = safeCells.filter(cords => arr.findIndex(resultCords => resultCords.x === cords.x && resultCords.y === cords.y) === -1)

    debugger
    arr.push(safeCells2)
    arr = arr.flat()
    console.log(arr, 'arrrrrrrrrrr')
    // console.log(safeCells2.length)
    console.log(safeCells2)

    //debugger
    if (safeCells2.length) {
        const arr2 = safeCells2.map(cell => getAllSafeCellsAround(cell.x, cell.y, safeCells2))

    }

    return arr

    //if (getAroundCellsCords(x, y, field.length).length)

}

export default getAllSafeCellsAround
