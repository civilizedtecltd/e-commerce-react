import * as Types from '../actions/actionTypes'
const initialState = {
    items:[],
    pending:false
}


const favoriteReducer = ( state = initialState , action ) => {
    const { payload } = action

    switch(action.type){
        case Types.ADD_FAVORITE:
         const isExist = state.items.find((items) => items.id === payload.items.id)
         if (isExist === undefined){
                return payload
            }
            return state

        case Types.SHOW_ALL_FAVORITE:
            return payload

        case Types.REMOVE_FAVORITE_ITEM:
            return payload
        case Types.FAVORITE_NOT_IN_STATE:
            console.log(payload)
            return payload
        case Types.EMPTY_FAVORITE_ITEMS:
            return payload
        default :
         return state


    }
}

export default favoriteReducer;
