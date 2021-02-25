import {CEIL_OPEN, CEIL_SET_FLAG} from "./types";

export const initialState = {
    numberOfBombs: 30,
    numberOfFlags: 30,
    gameStatus: 'playing',
    field: Array(10).fill([]).map((_, wrapperIndex) => (
        Array(10).fill(0).map((_, innerIndex) => ({
            id: [wrapperIndex, innerIndex],
            bomb: false,
            flag: false,
            num: 0,
            isClicked: false
        }))
    ))
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CEIL_OPEN: {
            const [wrapperIndex, innerIndex] = action.payload

            const newField = [...state.field]
            newField[wrapperIndex][innerIndex].isClicked = true

            return {
                ...state,
                field: newField
            }
        }
        case CEIL_SET_FLAG: {
            const [wrapperIndex, innerIndex] = action.payload

            const newField = [...state.field]
            const oldFlagValue = newField[wrapperIndex][innerIndex].flag
            newField[wrapperIndex][innerIndex].flag = !oldFlagValue

            return {
                ...state,
                field: newField
            }
        }
        default: {
            return state
        }
    }
}
