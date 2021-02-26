const checkBombOrZero = (data, wrapIndex, innerIndex, key) => {
    return !!data[wrapIndex] && !!data[wrapIndex][innerIndex] && !!data[wrapIndex][innerIndex][key]
}

const checkAroundCells = (field, parentIndex, childIndex, key) => {

    return [
        checkBombOrZero(field, [parentIndex - 1], [childIndex - 1], key),
        checkBombOrZero(field, [parentIndex - 1], [childIndex], key),
        checkBombOrZero(field, [parentIndex - 1], [childIndex + 1], key),
        checkBombOrZero(field, [parentIndex], [childIndex - 1], key),
        checkBombOrZero(field, [parentIndex], [childIndex + 1], key),
        checkBombOrZero(field, [parentIndex + 1], [childIndex - 1], key),
        checkBombOrZero(field, [parentIndex + 1], [childIndex], key),
        checkBombOrZero(field, [parentIndex + 1], [childIndex + 1], key),
    ]

}

export default checkAroundCells;
