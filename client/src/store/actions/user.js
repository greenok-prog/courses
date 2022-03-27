import { GET_USER_DATA, ADD_TO_PURCHASED, CHANGE_AVATAR, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_PROFILE_INFO, CREATE_USER, DELETE_USER, GET_USERS, LOGOUT, RESET_ERROR, RESET_MESSAGE, SET_CURRENT_USER, SET_ERROR, SET_MESSAGE } from ".";
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


//admin actions
export const getAllUsersAction = (payload) => ({
    type: GET_USERS,
    payload
})
export const getUserDataAction = (payload) => ({
    type: GET_USER_DATA,
    payload
})
export const createUserAction = (payload) => ({
    type: CREATE_USER,
    payload
})
export const deleteUserAction = (payload) => ({
    type: DELETE_USER,
    payload
})



// messages
export const setMessageAction = (payload) => ({
    type: SET_MESSAGE,
    payload
})
export const setErrorAction = (payload) => ({
    type: SET_ERROR,
    payload
})
export const resetMessageAction = (payload) => ({
    type: RESET_MESSAGE,
    payload
})
export const resetErrorAction = (payload) => ({
    type: RESET_ERROR,
    payload
})
//admin
//getting all users to admin panel
let token = localStorage.getItem('token')
let authHeader = { Authorization: `Bearer ${token}` }

export const getUsers = () => {
    return async dispatch => {
        try {
            token = localStorage.getItem('token')
            const res = await axios.get(`${serverApi}api/user`, { headers: { 'Authorization': `Bearer ${token}` } })
            dispatch(getAllUsersAction(res.data.users))
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}
export const getUserData = (id) => {
    return async dispatch => {
        try {
            token = localStorage.getItem('token')
            const res = await axios.post(`${serverApi}api/user/:id`, { _id: id }, { headers: { 'Authorization': `Bearer ${token}` } })
            dispatch(getUserDataAction(res.data.user))
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}
export const createUser = (email, password, roles, username, firstname, surname) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(`${serverApi}api/user`, { email, password, username, roles, firstName: firstname, secondName: surname }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(createUserAction((res.data.user)))


        } catch (e) {
            if (e.response.data.errors) {
                dispatch(setErrorAction(e.response.data.errors.errors[0].msg))
            }
            dispatch(setErrorAction(e.response.data.message))

        }
    }
}
export const changeUserData = (id, email, roles, username, firstname, secondName) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.put(`${serverApi}api/user/${id}/changeData`, { id, email, username, roles, firstName: firstname, secondName: secondName }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(createUserAction((res.data.user)))


        } catch (e) {
            if (e.response.data.errors) {
                dispatch(setErrorAction(e.response.data.errors.errors[0].msg))
            }
            dispatch(setErrorAction(e.response.data.message))

        }
    }
}
//delete user
export const deleteUser = (userId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = axios.delete(`${serverApi}api/user/${userId}`, { data: { userId }, headers: { Authorization: `Bearer ${token}` } },)
            dispatch(deleteUserAction(userId))

        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}




//registration
export const registration = (username, email, password, role) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${serverApi}api/auth/registration`, { username, email, password, role })
            dispatch(setCurrentUserAction(res.data))
            localStorage.setItem('token', res.data.token)
            return res.data
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
            return e.response.data

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
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}

//auth
export const auth = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.get(`${serverApi}api/auth/auth`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setCurrentUserAction(res.data))
            localStorage.setItem('token', res.data.token)

        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
//change user data
export const changeProfileInfo = (userId, username, firstName, secondName, userLink, githubLink) => {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token')
            const res = await axios.put(`${serverApi}api/user/profileInfo`, { userId, username, firstName, secondName, userLink, githubLink }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(changeProfileInfoAction(res.data.currentUser))
            dispatch(setMessageAction(res.data.message))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const changeEmail = (userId, email, password) => {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token')
            let authHeader = { 'Authorization': `Bearer ${token}` }
            const res = await axios.put(`${serverApi}api/user/email`, { userId, email, password }, { headers: authHeader })
            dispatch(changeEmailAction(res.data.email))
            dispatch(setMessageAction(res.data.message))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
            return e.response
        }
    }
}
export const changePassword = (userId, oldPas, newPas) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.put(`${serverApi}api/user/password`, { userId, oldPas, newPas }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch(setMessageAction(res.data.message))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const changeAvatar = (userId, avatar) => {
    return async dispatch => {
        try {
            const data = new FormData()
            data.append('avatar', avatar)
            data.append('userId', userId)
            const token = localStorage.getItem('token')

            const res = await axios.put(`${serverApi}api/user/avatar`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            dispatch(changeAvatarAction(res.data.avatar))
            dispatch(setMessageAction(res.data.message))
        } catch (error) {
            dispatch(setErrorAction(error.response.data.message))
        }
    }
}

export const addToPurchased = (userId, cardId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.put(`${serverApi}api/user/buyCourse`, { userId, cardId }, { headers: { 'Authorization': `Bearer ${token}` } })
            dispatch(addToPurchasedAction(res.data.currentUser))
            dispatch(setMessageAction(res.data.message))
        } catch (error) {
            dispatch(setErrorAction(error.response.data.message))
        }
    }
}