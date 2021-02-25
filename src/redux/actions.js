import {CEIL_OPEN, CEIL_SET_FLAG} from "./types";

export const ceilOpen = (id) => ({
    type: CEIL_OPEN,
    payload: id
})

export const ceilSetFlag = (id) => ({
    type: CEIL_SET_FLAG,
    payload: id
})
