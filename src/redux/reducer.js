import {OPEN_CEIL} from "./types";

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
        case OPEN_CEIL: {
            const [wrapperIndex, innerIndex] = action.payload

            const newField = [...state.field]
            newField[wrapperIndex][innerIndex].isClicked = true

            console.log('click')

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
