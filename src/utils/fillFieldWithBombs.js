import fillFieldWithNumbers from "./fillFieldWithNumbers";

const random = (min, max) => Math.floor(min + Math.random() * (max - min))

const fillFieldWithBombs = (field, length, numberOfBombs) => {
    const updatedField = [...field]

    for (let i = 0; i < numberOfBombs;) {
        const wrapperIndex = random(0, length);
        const rowIndex = random(0, length);

        if (!updatedField[wrapperIndex][rowIndex].bomb) {
            updatedField[wrapperIndex][rowIndex].bomb = true
            i++
        }
    }

    return fillFieldWithNumbers(updatedField)
}

export default fillFieldWithBombs;
