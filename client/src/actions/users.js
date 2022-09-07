import * as api from "../api/index.js"

export const signUp = (dat, navigate)=>async(dispatch)=>{
    const {data} = await api.signUp(dat);
    console.log(data)
    dispatch({
        type:"SIGNUP",
        payload : data
    })
    navigate("/");
}

export const signIn = (dat, navigate)=>async(dispatch)=>{
    const {data} = await api.signIn(dat);
    console.log(data)
    dispatch({
        type:"SIGNIN",
        payload : data
    })
    navigate("/");
}

export const logout = ()=> async(dispatch)=>{
    dispatch({
        type:"LOGOUT"
        
    })
    
    
}