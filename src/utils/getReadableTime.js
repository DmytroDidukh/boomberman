export const getReadableTime = (timestamp) => {
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - (hours * 60);
    const seconds = timestamp % 60;

    return `${hours ? hours + 'h' : ''} ${minutes ? minutes + 'm' : ''} ${seconds}s`
}

export const getSecondsFromTimestamp = (gameTime) => {
    return Math.round((Date.now() - (gameTime.gameStart + gameTime.pauseEnd - gameTime.pauseStart)) / 1000)
}
