const checkCellToBombOrVoid = (field, wrapIndex, innerIndex, key) => !!field[wrapIndex][innerIndex][key]

export default checkCellToBombOrVoid;
