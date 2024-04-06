import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "../action/action2"

const intialState = {
    loading : false,
    error: false,
    data: []
}

const postReducer = (state = intialState, action) => {
   if(action.type === POST_LOADING){
    return {...state, loading: true}
   }
   else if( action.type === POST_SUCCESS){
    return {...state, loading:false,data: action.payload}
   }
   else if( action.type === POST_ERROR){
    return {...state, loading: false, error: action.payload}
   }
   return state;
}
export default postReducer