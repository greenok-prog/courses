import { ADD_TO_FAVORITE, ADD_TO_PURCHASED, CHANGE_AUTH, REMOVE_FROM_FAVORITE, SET_USER_AVATAR } from "../actions"

const initialState = {
    isAuth: false,
    favorite: [],
    purchasedCourses: [],
    userAvatar: "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return { ...state, isAuth: !state.isAuth }
        case ADD_TO_FAVORITE:
            return { ...state, favorite: [...state.favorite, action.payload] }
        case REMOVE_FROM_FAVORITE:
            return { ...state, favorite: state.favorite.filter(card => card.id !== action.payload) }
        case ADD_TO_PURCHASED:
            return { ...state, purchasedCourses: [...state.purchasedCourses, action.payload] }
        case SET_USER_AVATAR:
            return { ...state, userAvatar: action.payload }
        default:
            return state
    }
}
