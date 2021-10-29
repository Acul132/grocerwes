export const setUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: "setUser",
            payload: user
        })
    }
}

export const removeUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: "removeUser",
            payload: {}
        })
    }
}