import axios from "axios"
import { DECREMENT, INCREMENT, RESET } from "./actionType"
import { postError, postLoading, postSuccess } from "./action2"

export const increment = (payload) =>{
    return {
        type: INCREMENT,
        value: payload
    }
}
export const decrement = (payload) =>{
    return {
        type: DECREMENT,
        value: payload
    }
}
export const reset = () =>{
    return {
        type: RESET,
    }
}
