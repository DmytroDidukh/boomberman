import {
    CEIL_OPEN,
    CEIL_SET_FLAG,
    CHANGE_FIELD_SIZE,
    CHANGE_GAME_MODE,
    CHANGE_GAME_STATUS
} from "./types";
import createField from "../utils/createField";

export const initialState = {
    numberOfBombs: 30,
    numberOfFlags: 30,
    gameStatus: 'preparing',
    gameMode: 'normal',
    field: createField(10)
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
        case CHANGE_GAME_STATUS: {
            const [wrapperIndex, innerIndex] = action.payload

            const newField = [...state.field]
            const oldFlagValue = newField[wrapperIndex][innerIndex].flag
            newField[wrapperIndex][innerIndex].flag = !oldFlagValue

            return {
                ...state,
                field: newField
            }
        }
        case CHANGE_FIELD_SIZE: {
            const {gameMode} = state
            const gameModePercentage = gameMode === 'easy' ? .1 : gameMode === 'normal' ? .3 : .6;
            const numberOfItems = action.payload * 10 * gameModePercentage

            return {
                ...state,
                field: createField(action.payload),
                numberOfBombs: numberOfItems,
                numberOfFlags: numberOfItems,
            }
        }
        case CHANGE_GAME_MODE: {
            const gameMode = action.payload
            const gameModePercentage = gameMode === 'easy' ? .1 : gameMode === 'normal' ? .3 : .6;
            const numberOfItems = state.field.length * 10 * gameModePercentage

            return {
                ...state,
                gameMode: action.payload,
                numberOfBombs: numberOfItems,
                numberOfFlags: numberOfItems,
            }
        }
        default: {
            return state
        }
    }
}
