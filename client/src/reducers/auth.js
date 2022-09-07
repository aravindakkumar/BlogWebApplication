export const userReducer = (state= {authData:null}, action)=>{
    switch(action.type){
        case "SIGNUP":
            localStorage.clear();
            localStorage.setItem("profile", JSON.stringify(action.payload))
            // console.log(action.payload)
            return {...state, authData : action.payload};
            // return {...state, authData : action?.data.result};
        case "SIGNIN":
            localStorage.clear();
            localStorage.setItem("profile", JSON.stringify(action.payload))
            return {...state, authData : action.result};
        case "LOGOUT":
            localStorage.clear();
            return {...state, authData:null};
        default :
            return state;
    }
}