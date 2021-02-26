import {
    OPEN_CELL,
    SET_FLAG,
    CHANGE_FIELD_SIZE,
    CHANGE_GAME_MODE,
    SET_FIELD,
    CHANGE_GAME_STATUS
} from "./types";
import createField from "../utils/createField";
import getPercentageOfFieldItems from "../utils/getPercentageOfFieldItems";

export const initialState = {
    numberOfBombs: 5,
    numberOfFlags: 30,
    gameStatus: 'preparing',
    gameMode: 'normal',
    field: createField(10)
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CELL: {
            const [wrapperIndex, innerIndex] = action.payload

            const newField = [...state.field]
            newField[wrapperIndex][innerIndex].isClicked = true

            return {
                ...state,
                field: newField
            }
        }
        case SET_FLAG: {
            const [wrapperIndex, innerIndex] = action.payload

            const newField = [...state.field]
            const oldFlagValue = newField[wrapperIndex][innerIndex].flag
            newField[wrapperIndex][innerIndex].flag = !oldFlagValue

            return {
                ...state,
                field: newField,
                numberOfFlags: oldFlagValue ? state.numberOfFlags + 1 : state.numberOfFlags - 1
            }
        }
        case CHANGE_GAME_STATUS: {
            return {
                ...state,
                gameStatus: action.payload
            }
        }
        case CHANGE_FIELD_SIZE: {
            const {gameMode} = state
            const gameModePercentage = getPercentageOfFieldItems(gameMode)
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
            const gameModePercentage = getPercentageOfFieldItems(gameMode)
            const numberOfItems = state.field.length * 10 * gameModePercentage

            return {
                ...state,
                gameMode: action.payload,
                numberOfBombs: numberOfItems,
                numberOfFlags: numberOfItems,
            }
        }
        case SET_FIELD: {
            return {
                ...state,
                field: action.payload
            }
        }
        default: {
            return state
        }
    }
}
