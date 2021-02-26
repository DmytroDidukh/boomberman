const createField = (length) => (
    Array(length).fill([]).map((_, wrapperIndex) => (
        Array(length).fill(0).map((_, innerIndex) => ({
            id: {x: innerIndex, y: wrapperIndex},
            bomb: false,
            flag: false,
            num: 0,
            click: false
        }))
    ))
)

export default createField
