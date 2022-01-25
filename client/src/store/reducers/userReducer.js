import { ADD_TO_PURCHASED, CHANGE_AVATAR, CHANGE_EMAIL, CHANGE_PROFILE_INFO, LOGOUT, SET_CURRENT_USER, SET_MESSAGE } from "../actions"

const initialState = {
    isAuth: false,
    currentUser: {},
    message: ""
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            localStorage.removeItem('token')
            return { ...state, currentUser: {}, isAuth: false }
        case SET_CURRENT_USER:
            return { ...state, currentUser: action.payload, isAuth: true, isLoading: false }
        case ADD_TO_PURCHASED:
            return { ...state, currentUser: { ...state.currentUser, user: action.payload } }
        case SET_MESSAGE:
            return { ...state, message: action.payload }
        case CHANGE_PROFILE_INFO:
            return { ...state, currentUser: { ...state.currentUser, user: action.payload } }
        case CHANGE_EMAIL:
            return { ...state, currentUser: { ...state.currentUser, user: { ...state.currentUser.user, email: action.payload } } }
        case CHANGE_AVATAR:
            return { ...state, currentUser: { ...state.currentUser, user: { ...state.currentUser.user, avatar: action.payload } } }


        default:
            return state
    }
}
