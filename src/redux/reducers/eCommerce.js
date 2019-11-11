import { LOG_IN, SIGN_UP, RESET_PASSWORD } from "../actionTypes";

const initialState = {
   data:{},
   completed:false,
};

export default function(state = initialState, action) {

  switch (action.type) {
    case LOG_IN: {
      const { state } = action.payload;
      return {
        data: [...state],
      };
    }

    case SIGN_UP: {
      const { state } = action.payload;
      return {
        data:{...state}
      };
    }

    case RESET_PASSWORD:{
      const {state} =action.payload
      return{
        data:{...state}
      }
    }

    default:
      return state;
  }

}
