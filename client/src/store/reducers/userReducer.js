import { ADD_TO_PURCHASED, CHANGE_AVATAR, CHANGE_EMAIL, CHANGE_PROFILE_INFO, GET_USER_DATA, CREATE_USER, DELETE_USER, GET_USERS, LOGOUT, RESET_ERROR, RESET_MESSAGE, SET_CURRENT_USER, SET_ERROR, SET_MESSAGE } from "../actions"

const initialState = {
    isAuth: false,
    currentUser: {},
    users: [],
    error: "",
    isError: false,
    message: '',
    isMessage: false,
    errors: [],
    userData: {},

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
        //errors    
        case SET_ERROR:
            return { ...state, error: action.payload, isError: true }
        case RESET_ERROR:
            return { ...state, error: '', isError: false }
        //messages
        case SET_MESSAGE:
            return { ...state, message: action.payload, isMessage: true }
        case RESET_MESSAGE:
            return { ...state, message: '', isMessage: false }

        //profile
        case CHANGE_PROFILE_INFO:
            return { ...state, currentUser: { ...state.currentUser, user: action.payload } }
        case CHANGE_EMAIL:
            return { ...state, currentUser: { ...state.currentUser, user: { ...state.currentUser.user, email: action.payload } } }
        case CHANGE_AVATAR:
            return { ...state, currentUser: { ...state.currentUser, user: { ...state.currentUser.user, avatar: action.payload } } }
        // admin reducers
        case GET_USER_DATA:
            return { ...state, userData: action.payload }
        case GET_USERS:
            return { ...state, users: action.payload }
        case CREATE_USER:
            return { ...state, users: [...state.users, action.payload] }
        case DELETE_USER:
            return { ...state, users: state.users.filter(user => user._id !== action.payload) }
        default:
            return state
    }
}
