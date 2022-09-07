 const fetchReducer = (state = [], action)=> {
    switch(action.type){
        case "FETCH":
            return action.payload;
        // case "SINGLE":
        //     return action.payload;
        
        default:
            return state;
    }
}

export default fetchReducer;