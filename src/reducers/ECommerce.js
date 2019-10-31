import { 
  LOGIN,
  SIGN_UP
} from '../constants/ActionTypes'

const insitalState=[
    {
        text:'Use Redux',
        completed:false,
        id:0
    }
]


export default function Ecommarce(state = insitalState, action){
    switch(action.type){
        case LOGIN:
            return[
                ...state,
                {
                    id:state.reduce((username,password)),
                    completed:false,
                    text: action.text
                }
            ]
            case SIGN_UP:
              return
            default:
              return state;
    }
}