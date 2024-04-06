import axios from "axios"

export const POST_LOADING = "POST_LOADING"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_ERROR = "POST_ERROR"

export const postLoading = () =>{
    return {
        type: POST_LOADING
    }
}
export const postSuccess = (data) =>{
    return {
        type: POST_SUCCESS,
        payload: data
    }
}
export const postError = (error) =>{
    return {
        type: POST_ERROR,
        payload: error
    }
}
export function fetchPost() {

    return (dispatch) =>{
        
        dispatch(postLoading())
        axios.get("https://fakestoreapi.com/products")
       .then( response => {
        dispatch(postSuccess(response.data))
        console.log(response.data)
       })
       .catch( error => dispatch(postError(error.message)))
    }
   
}

