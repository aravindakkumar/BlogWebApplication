export const singlePostReducer = (state =  {}, action)=>{
    switch(action.type){
        case "SINGLE":
            return {...state,...action.payload}
        default :
            return state;
    }
}