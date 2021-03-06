import {
    OPEN_CELL,
    SET_FLAG,
    CHANGE_FIELD_SIZE,
    CHANGE_GAME_MODE,
    SET_FIELD,
    CHANGE_GAME_STATUS,
    SET_PLAYER,
    SET_LEADERBOARD,
    SET_GAME_TIME,
    RESET_GAME_TIME,
} from "./types";
import createField from "../utils/createField";

export const initialState = {
    numberOfBombs: 10,
    numberOfFlags: 10,
    gameStatus: 'preparing',
    gameMode: 0,
    fieldSize: 0,
    field: createField(10),
    player: {
        username: '',
        gameMode: 'easy',
    },
    leaderboard: {
        easy: [],
        normal: [],
        hard: [],
    },
    gameTime: {
        gameStart: 0,
        gameEnd: 0,
        pauseStart: 0,
        pauseEnd: 0,
    }
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CELL: {
            const {x, y} = action.payload

            const newField = [...state.field]
            newField[y][x].click = true

            return {
                ...state,
                field: newField
            }
        }
        case SET_FLAG: {
            const {x, y} = action.payload

            const newField = [...state.field]
            const oldFlagValue = newField[y][x].flag
            newField[y][x].flag = !oldFlagValue

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
            const convertedFieldSize = (action.payload + 1) * 10
            const numberOfFieldItems = convertedFieldSize * (gameMode + 1)

            return {
                ...state,
                field: createField(convertedFieldSize),
                fieldSize: action.payload,
                numberOfBombs: numberOfFieldItems,
                numberOfFlags: numberOfFieldItems,
            }
        }
        case CHANGE_GAME_MODE: {
            const numberOfFieldItems = (state.fieldSize + 1) * 10 * (action.payload + 1)

            return {
                ...state,
                gameMode: action.payload,
                numberOfBombs: numberOfFieldItems,
                numberOfFlags: numberOfFieldItems,
            }
        }
        case SET_FIELD: {
            return {
                ...state,
                field: action.payload.field,
                numberOfBombs: action.payload.numberOfFieldItems,
                numberOfFlags: action.payload.numberOfFieldItems
            }
        }
        case SET_PLAYER: {
            return {
                ...state,
                player: {
                    ...action.payload
                }
            }
        }
        case SET_LEADERBOARD: {
            return {
                ...state,
                leaderboard: action.payload
            }
        }
        case SET_GAME_TIME: {
            return {
                ...state,
                gameTime: {
                    ...state.gameTime,
                    ...action.payload
                }
            }
        }
        case RESET_GAME_TIME: {
            return {
                ...state,
                gameTime: {
                    ...initialState.gameTime
                }
            }
        }
        default: {
            return state
        }
    }
}
