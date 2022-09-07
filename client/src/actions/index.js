import * as api from "../api/index.js";

export const fetchPosts = ()=> async(dispatch)=> {
    try {
        const {data} = await api.fetchPosts();
        dispatch({
            type : "FETCH",payload : data 
        })
    } catch (error) {
        console.log(error);
    }
}

export const createPosts = (post)=> async(dispatch)=> {
    try {
    const {data} = await api.createPosts(post)
       dispatch({
        type : "CREATE", payload: data
       })
    
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id)=> async(dispatch)=>{
    const data = await api.deletePost(id);

    dispatch({
        type: "DELETE",
        payload : data
    })
}

export const createComment = (id, post)=> async(dispatch)=> {
    const data = api.createComment(id,post);

    dispatch({
        type: "CCOM",
        payload : data
    })
}

export const deleteComment = (id, postId)=> async(dispatch)=>{
    const data = api.deleteComment(id, postId);
    dispatch({
        type: "DCOM",
        payload: data
    })
}

// export const singlePost = (id)=> async(dispatch)=>{
//     // const {data} = await api.singlePost(id);
//     const data = id;
    
//     dispatch({
//         type:"SINGLE",
//         payload : data
//     })
// }