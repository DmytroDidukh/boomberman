const getPercentageOfFieldItems = (gameMode) => gameMode === 'easy' ? .1 : gameMode === 'normal' ? .3 : .6;

export default getPercentageOfFieldItems
