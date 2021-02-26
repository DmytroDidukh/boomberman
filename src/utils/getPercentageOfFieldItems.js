const getPercentageOfFieldItems = (gameMode) => gameMode === 'easy' ? .1 : gameMode === 'normal' ? .2 : .5;

export default getPercentageOfFieldItems
