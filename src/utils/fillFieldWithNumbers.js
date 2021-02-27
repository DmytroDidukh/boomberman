import checkCellToBombOrVoid from "./checkCellToBombOrVoid";
import getAroundCellsCords from "./getAroundCellsCords";

const fillFieldWithNumbers = (field) => {
    return field.map(parent => (
        parent.map(child => {
                const cellsWithBombsAround = getAroundCellsCords(child.id.x, child.id.y, field.length)
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
