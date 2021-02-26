import checkAroundCells from "./checkAroundCells";

const fillFieldWithNumbers = (field) => {
    return field.map((parent, parentIndex) => (
        parent.map((child, childIndex) => {

                const cellsAround = checkAroundCells(field, parentIndex, childIndex, 'bomb').filter(item => item)

                return {
                    ...child,
                    num: cellsAround.length
                }
            }
        )))
}

export default fillFieldWithNumbers;
