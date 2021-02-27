import getCordsCellsAround from "./getCordsCellsAround";

const getAllSafeCellsAround = (x, y, field) => {
    let cordsCellsToOpen = []

    const getCellsToOpen = (xInner, yInner) => {
        if (field[yInner][xInner].num !== 0) {
            return
        }

        const uniqueCordsCellsAround = getCordsCellsAround(xInner, yInner, field.length)
            .filter(cords => cordsCellsToOpen
                .findIndex(resCords => resCords.x === cords.x && resCords.y === cords.y) === -1)

        cordsCellsToOpen.push(uniqueCordsCellsAround)
        cordsCellsToOpen = cordsCellsToOpen.flat()

        if (uniqueCordsCellsAround.length) {
            uniqueCordsCellsAround.map(cell => getCellsToOpen(cell.x, cell.y))
        }
    }

    getCellsToOpen(x, y)

    return cordsCellsToOpen
}

export default getAllSafeCellsAround;
