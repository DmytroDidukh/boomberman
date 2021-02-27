import checkCellToBombOrVoid from "./checkCellToBombOrVoid";
import getCordsCellsAround from "./getCordsCellsAround";

const fillFieldWithNumbers = (field) => {
    return field.map(parent => (
        parent.map(child => {
                const cellsWithBombsAround = getCordsCellsAround(child.id.x, child.id.y, field.length)
                    .map(cords => checkCellToBombOrVoid(field, cords.y, cords.x, 'bomb'))
                    .filter(item => item)

                return {
                    ...child,
                    num: cellsWithBombsAround.length
                }
            }
        )))
}

export default fillFieldWithNumbers;
