const initialState = {
    isAuth: false,
    favorite: []
}
const CHANGE_AUTH = 'CHANGE_AUTH'
const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return { ...state, isAuth: true }
        case ADD_TO_FAVORITE:
            return { ...state, favorite: [...state.favorite, action.payload] }
        case REMOVE_FROM_FAVORITE:
            return { ...state, favorite: state.favorite.filter(card => card.id !== action.payload) }
        default:
            return state
    }
}
