import { DECREMENT, INCREMENT, RESET } from "../action/actionType";

let intialState = {a:0}

function CounterReducer(state= intialState, action) {
    
   switch(action.type){
      case INCREMENT : 
         return  {...state, a: state.a + action.value}
      case DECREMENT :
        return   {...state,a: state.a - action.value}
        
        case RESET :
            return {...state, a:0};
        default :
            return state;

   }
}
export default CounterReducer;