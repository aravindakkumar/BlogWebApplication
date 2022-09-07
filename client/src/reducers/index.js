import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import createReducer from "./createReducer";
import {userReducer} from "./auth.js"
import { deleteReducer } from "./deleteReducer";
import {createComment} from "./createCommentReducer";
// import { singlePostReducer } from "./singleReducer";

const allReducers = combineReducers({
    fetch : fetchReducer,
    create : createReducer,
    auth : userReducer,
    del : deleteReducer,
    ccm: createComment
})

export default allReducers;