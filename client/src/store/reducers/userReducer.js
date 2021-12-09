const initialState = {
    isAuth: false,
    favorite: []
}
const CHANGE_AUTH = 'CHANGE_AUTH'
const FAV = 'FAV'

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return { ...state, isAuth: true }
        case FAV:
            return { ...state, favorite: [...state.favorite, action.payload] }
        default:
            return state
    }
}
