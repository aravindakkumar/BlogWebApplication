export const createComment = (state=-1, action)=>{
    switch(action.payload){
        case "CCOM":
            return action.payload;
        default:
            return state;
    }
}