import getAroundCellsCords from "./getAroundCellsCords";

const getAllSafeCellsAround = (x, y, field) => {
    let arr = []

    const getCellsToOpen = (xInner, yInner) => {
        if (field[yInner][xInner].num !== 0) {
            return
        }

        const cordsCellsAround = getAroundCellsCords(xInner, yInner, field.length)
            .filter(cords => arr.findIndex(resCords => resCords.x === cords.x && resCords.y === cords.y) === -1)

        arr.push(cordsCellsAround)
        arr = arr.flat()

        if (cordsCellsAround.length) {
            cordsCellsAround.map(cell => getCellsToOpen(cell.x, cell.y))
        }
    }

    getCellsToOpen(x, y)

    return arr
}

export default getAllSafeCellsAround;
