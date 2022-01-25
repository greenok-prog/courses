import { ADD_TO_PURCHASED, CHANGE_AVATAR, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_PROFILE_INFO, LOGOUT, SET_CURRENT_USER, SET_MESSAGE, SET_USER_AVATAR } from ".";
import axios from 'axios'
import config from '../../config/default.json'


const serverApi = config.API_SERVER

//auth
export const logoutAction = (payload) => ({
    type: LOGOUT,
    payload
})
export const setCurrentUserAction = (payload) => ({
    type: SET_CURRENT_USER,
    payload
})

//actions with cards
export const addToPurchasedAction = (payload) => ({
    type: ADD_TO_PURCHASED,
    payload
})

// profile changings
export const changeProfileInfoAction = (payload) => ({
    type: CHANGE_PROFILE_INFO,
    payload
})
export const changeEmailAction = (payload) => ({
    type: CHANGE_EMAIL,
    payload
})
export const changePasswordAction = (payload) => ({
    type: CHANGE_PASSWORD,
    payload
})
export const changeAvatarAction = (payload) => ({
    type: CHANGE_AVATAR,
    payload
})



// messages
export const setMessageAction = (payload) => ({
    type: SET_MESSAGE,
    payload
})




//registration
export const registration = (username, email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${serverApi}api/auth/registration`, { username, email, password })
            dispatch(setCurrentUserAction(res.data))
            localStorage.setItem('token', res.data.token)
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}
//login
export const login = (email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${serverApi}api/auth/login`, { email, password })
            dispatch(setCurrentUserAction(res.data))
            localStorage.setItem('token', res.data.token)

        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}

//auth
export const auth = () => {
    return async dispatch => {
        try {
            const res = await axios.get(`${serverApi}api/auth/auth`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            dispatch(setCurrentUserAction(res.data))
            localStorage.setItem('token', res.data.token)

        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
//change user data
export const changeProfileInfo = (userId, firstName, secondName, userLink, githubLink) => {
    return async dispatch => {
        try {
            const res = await axios.put(`${serverApi}api/user/profileInfo`, { userId, firstName, secondName, userLink, githubLink })
            dispatch(changeProfileInfoAction(res.data.currentUser))
        } catch (e) {

        }
    }
}
export const changeEmail = (userId, email, password) => {
    return async dispatch => {
        try {
            const res = await axios.put(`${serverApi}api/user/email`, { userId, email, password })
            dispatch(setMessageAction(res.data.message))
            dispatch(changeEmailAction(res.data.email))

        } catch (e) {
            dispatch(setMessageAction(e.response))
        }
    }
}
export const changePassword = (userId, oldPas, newPas) => {
    return async dispatch => {
        try {
            const res = await axios.put(`${serverApi}api/user/password`, { userId, oldPas, newPas })

        } catch (e) {

        }
    }
}
export const changeAvatar = (userId, avatar) => {
    return async dispatch => {
        try {
            const data = new FormData()
            data.append('avatar', avatar)
            data.append('userId', userId)
            const res = await axios.put(`${serverApi}api/user/avatar`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            dispatch(changeAvatarAction(res.data.avatar))
            console.log(res);
        } catch (error) {
            console.log(error.response);
        }
    }
}

export const addToPurchased = (userId, cardId) => {
    return async dispatch => {
        try {
            const res = await axios.put(`${serverApi}api/user/buyCourse`, { userId, cardId })
            dispatch(addToPurchasedAction(res.data.currentUser))
            dispatch(setMessageAction(res.data.message))
        } catch (error) {
            dispatch(setMessageAction(error.response))
        }
    }
}