const reducer = (state=null, action) => {
    switch(action.type){
        case "setUser":
            state = action.payload
            return state
        case "removeUser":
            state = null
            return state
        default:
            return null
    }
}

export default reducer