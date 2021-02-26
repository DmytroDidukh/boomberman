import getAroundCellsCords from "./getAroundCellsCords";

const checkBombOrZero = (data, wrapIndex, innerIndex, key) => {
    return !!data[wrapIndex] && !!data[wrapIndex][innerIndex] && !!data[wrapIndex][innerIndex][key]
}

const checkAroundCells = (field, {
    x,
    y
}, key) => getAroundCellsCords(x, y, field.length).map(cords => checkBombOrZero(field, cords.y, cords.x, key))

export default checkAroundCells;
