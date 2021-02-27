import {
    OPEN_CELL,
    SET_FLAG,
    CHANGE_FIELD_SIZE,
    CHANGE_GAME_MODE,
    CHANGE_GAME_STATUS,
    SET_FIELD,
} from "./types";

export const openCell = (id) => ({
    type: OPEN_CELL,
    payload: id
})

export const setFlag = (id) => ({
    type: SET_FLAG,
    payload: id
})

export const changeFieldSize = (size) => ({
    type: CHANGE_FIELD_SIZE,
    payload: size
})

export const changeGameMode = (mode) => ({
    type: CHANGE_GAME_MODE,
    payload: mode
})

export const changeGameStatus = (status) => ({
    type: CHANGE_GAME_STATUS,
    payload: status
})

export const setField = (data) => ({
    type: SET_FIELD,
    payload: data
})
