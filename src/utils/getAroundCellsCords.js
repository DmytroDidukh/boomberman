const getAroundCellsCords = (x, y, length) => [
    {x: x - 1, y: y - 1},
    {x: x, y: y - 1},
    {x: x + 1, y: y - 1},
    {x: x - 1, y: y},
    {x: x + 1, y: y},
    {x: x - 1, y: y + 1},
    {x: x, y: y + 1},
    {x: x + 1, y: y + 1},
].filter(({x, y}) => !(y < 0 || y >= length || x < 0 || x >= length))

export default getAroundCellsCords
