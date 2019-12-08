import * as Types from '../actions/actionTypes'
const initialState = []
const favoriteReducer = ( state = initialState , action ) => {
    const { payload } = action
    switch(action.type){
        case Types.ADD_FAVORITE: 
         const isExist = state.find((items) => items.id === payload.id)
         if (isExist === undefined){
                return [
                ...payload
                ]
            }  
            return state 

        case Types.SHOW_ALL_FAVORITE:
            return state
        
        case Types.REMOVE_FAVORITE_ITEM:
            const remoteItem = state.findIndex((item)=>item.id === action.payload.id)
            state.splice(remoteItem,1)
            return state
        default :
         return state  
                
            
    }
}

export default favoriteReducer;