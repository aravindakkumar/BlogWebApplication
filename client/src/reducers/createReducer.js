const createReducer = (state=-1, action)=>{
    switch(action.type){
        case "CREATE":
            return action.payload
        default: return state
    }
}

export default createReducer;