import { ADD_TO_FAVORITE, ADD_TO_PURCHASED, CHANGE_AUTH, REMOVE_FROM_FAVORITE, SET_USER_AVATAR } from ".";

export const changeAuthAction = (payload) => ({
    type: CHANGE_AUTH,
    payload
})

export const addToFavoriteAction = (payload) => ({
    type: ADD_TO_FAVORITE,
    payload
})

export const removeFromFavoriteAction = (payload) => ({
    type: REMOVE_FROM_FAVORITE,
    payload
})

export const addToPurchasedAction = (payload) => ({
    type: ADD_TO_PURCHASED,
    payload
})

export const setUserAvatarAction = (payload) => ({
    type: SET_USER_AVATAR,
    payload
})
