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
            return [
                ...payload
            ]

        case Types.REMOVE_FAVORITE_ITEM:
            return [
                ...payload
            ]
        case Types.FAVORITE_NOT_IN_STATE:
            return [
                ...payload
            ]
        default :
         return state


    }
}

export default favoriteReducer;
