import {
    CEIL_OPEN,
    CEIL_SET_FLAG,
    CHANGE_FIELD_SIZE,
    CHANGE_GAME_MODE,
    CHANGE_GAME_STATUS,
    SET_FIELD_WITH_BOMBS
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

export const changeGameStatus = (status) => ({
    type: CHANGE_GAME_STATUS,
    payload: status
})

export const setFieldWithBombs = (updatedField) => ({
    type: SET_FIELD_WITH_BOMBS,
    payload: updatedField
})
