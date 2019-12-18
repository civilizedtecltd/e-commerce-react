import * as Types from '../actions/actionTypes'
const initialState = []
const favoriteReducer = ( state = initialState , action ) => {
    const { payload, pending } = action
    switch(action.type){
        case Types.ADD_FAVORITE:
         const isExist = state.find((items) => items.id === payload.id)
         if (isExist === undefined){
                return [
                ...payload,
                 {pending:pending}
                ]
            }
            return state

        case Types.SHOW_ALL_FAVORITE:
            return [
                ...payload,
                {pending:pending}
            ]

        case Types.REMOVE_FAVORITE_ITEM:
            return [
                ...payload
            ]
        case Types.FAVORITE_NOT_IN_STATE:
            return [
                ...payload,
            ]
        case Types.EMPTY_FAVORITE_ITEMS:
            return [
                ...payload,
            ]
        default :
         return state


    }
}

export default favoriteReducer;
