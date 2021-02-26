import fillFieldWithNumbers from "./fillFieldWithNumbers";

const random = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

const fillFieldWithBombs = (field, length, numberOfBombs) => {
    const updatedField = [...field]

    for (let i = 0; i < numberOfBombs;) {
        const wrapperIndex = random(0, length - 1);
        const rowIndex = random(0, length - 1);

        if (!updatedField[wrapperIndex][rowIndex].bomb) {
            updatedField[wrapperIndex][rowIndex].bomb = true
            i++
        }
    }

    return fillFieldWithNumbers(updatedField)
}

export default fillFieldWithBombs;
