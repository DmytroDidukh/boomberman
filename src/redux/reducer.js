export const initialState = {
    numberOfBombs: 30,
    numberOfFlags: 30,
    gameStatus: 'playing'
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEFAULT': {
            return {...state}
        }
        default: {
            return state
        }
    }
}
