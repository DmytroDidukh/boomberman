import {
    CEIL_OPEN,
    CEIL_SET_FLAG,
    CHANGE_FIELD_SIZE,
    CHANGE_GAME_MODE,
    CHANGE_GAME_STATUS
} from "./types";

export const ceilOpen = (id) => ({
    type: CEIL_OPEN,
    payload: id
})

export const ceilSetFlag = (id) => ({
    type: CEIL_SET_FLAG,
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

export const changeFieldStatus = (status) => ({
    type: CHANGE_GAME_STATUS,
    payload: status
})
