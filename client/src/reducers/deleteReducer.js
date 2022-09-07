export const deleteReducer = (state = -1, action)=>{
    switch(action.type){
        case "DELETE":
            if(action.payload.message==="Post deleted") return 0;
            else return 1;
        default :
            return 1;
    }
}