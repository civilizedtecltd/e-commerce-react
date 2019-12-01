import * as Types from '../actions/actionTypes'
const initialState = []
const favoriteReducer = ( state = initialState , action ) => {
    // const { payload } = action.payload
    switch(action.type){
        case Types.ADD_FAVORITE: 
            if(action.payload !== undefined){
                const isExist = state.find((items) => items.id === action.payload.id)
                if (isExist === undefined){
                    return [
                    ...state,
                    action.payload
                 ]
               }
               return state
            }   
        
         break;
        case Types.SHOW_ALL_FAVORITE:
            return state
        

        default :
         return state  
                
            
    }
}

export default favoriteReducer;