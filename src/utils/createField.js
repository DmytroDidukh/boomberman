const createField = (length) => (
    Array(length).fill([]).map((_, wrapperIndex) => (
        Array(length).fill(0).map((_, innerIndex) => ({
            id: [wrapperIndex, innerIndex],
            bomb: false,
            flag: false,
            num: 0,
            isClicked: false
        }))
    ))
)

export default createField
