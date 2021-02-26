import checkAroundCells from "./checkAroundCells";

const fillFieldWithNumbers = (field) => {
    return field.map(parent => (
        parent.map(child => {

                const cellsAround = checkAroundCells(field, child.id, 'bomb').filter(item => item)

                return {
                    ...child,
                    num: cellsAround.length
                }
            }
        )))
}

export default fillFieldWithNumbers;
