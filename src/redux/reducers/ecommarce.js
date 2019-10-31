import { LOG_IN, SIGN_UP,RESET_PASSWORD } from "../actionTypes";

const initialState = {
   data:{},
   completed:false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      const { username,password } = action.payload;
      return {
        ...state,
        data: [...state],
      };
    }


    case SIGN_UP: {
      const { firstname,lastname,password,email,phone } = action.payload;
      return {
        ...state,
        data:{...state}
      };
    }

    case RESET_PASSWORD:{
      const {email} =action.payload
      return{
        ...state,
        email:{...state}
      }
    }


    default:
      return state;

    
  }
 
}
