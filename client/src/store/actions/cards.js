import axios from "axios";
import { ADD_CARD, ADD_CARD_PROMO, ADD_COMMENT, ADD_LESSON, ADD_LESSON_BLOCK, ADD_TO_FAVORITE, DELETE_BLOCK, DELETE_LESSON, GET_ALL_CARDS, GET_CARD, GET_CARD_PROMO, GET_LESSONS, REMOVE_CARD, REMOVE_FROM_FAVORITE, } from ".";
import config from '../../config/default.json'
import { setErrorAction, setMessageAction } from "./user";

const serverApi = config.API_SERVER
export const getAllCardsAction = (payload) => ({
    type: GET_ALL_CARDS,
    payload
})
export const addToFavoriteAction = (payload) => ({
    type: ADD_TO_FAVORITE,
    payload
})
export const addCardAction = (payload) => ({
    type: ADD_CARD,
    payload
})

export const getCardAction = (payload) => ({
    type: GET_CARD,
    payload
})
export const getCardPromoAction = (payload) => ({
    type: GET_CARD_PROMO,
    payload
})
export const addCardPromoAction = (payload) => ({
    type: ADD_CARD_PROMO,
    payload
})
export const removeCardAction = (payload) => ({
    type: REMOVE_CARD,
    payload
})
export const addLessonAction = (payload) => ({
    type: ADD_LESSON,
    payload
})
export const getLessonsAction = (payload) => ({
    type: GET_LESSONS,
    payload
})
export const addCommentAction = (payload) => ({
    type: ADD_COMMENT,
    payload
})
export const removeFromFavoriteAction = (payload) => ({
    type: REMOVE_FROM_FAVORITE,
    payload
})
export const addLessonBlockAction = (payload) => ({
    type: ADD_LESSON_BLOCK,
    payload
})
export const deleteLessonBlockAction = (payload) => ({
    type: DELETE_BLOCK,
    payload
})

export const deleteLessonAction = (payload) => ({
    type: DELETE_LESSON,
    payload
})



export const getAllCards = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:5000/api/cards')
            dispatch(getAllCardsAction(res.data))

        } catch (e) {


        }
    }
}
export const addLesson = (id, title, text, links, video) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const formData = new FormData()
            formData.append('id', id);
            formData.append('title', title);
            formData.append('text', text);
            formData.append('links', links);
            if (video) {
                formData.append('video', video);
            }
            const res = await axios.post(serverApi + "api/cards/addLesson", formData, { headers: { Authorization: `Bearer ${token}` } });
            console.log(res.data);
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const changeLesson = (id, title, text, links, video) => {
    return async dispatch => {
        try {

            const token = localStorage.getItem('token')
            const data = new FormData()
            data.append('lessonId', id);
            data.append('title', title);
            data.append('text', text);
            data.append('links', links);
            if (video) {
                data.append('video', video);
            }
            const res = await axios.put(`${serverApi}api/cards/${id}/changeLesson`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log(res.data);
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const addLessonBlock = (cardId, title) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(serverApi + `api/cards/${cardId}/addLessonBlock`, { cardId, title }, { headers: { Authorization: `Bearer ${token}`, } });
            dispatch(addLessonBlockAction(res.data))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const deleteLessonBlock = (blockId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.delete(serverApi + `api/cards/${blockId}/deleteLessonBlock`, { headers: { Authorization: `Bearer ${token}` }, data: { blockId } });
            dispatch(deleteLessonBlockAction(res.data))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const deleteLesson = (lessonId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.delete(serverApi + `api/cards/${lessonId}/deleteLesson`, { headers: { Authorization: `Bearer ${token}` }, data: { lessonId } });

        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}

export const addComment = (blockId, lessonId, userId, text) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(serverApi + `api/cards/${lessonId}/addComment`, { blockId, lessonId, userId, text }, { headers: { Authorization: `Bearer ${token}` } });

            dispatch(addCommentAction(res.data))


        } catch (e) {
            console.log(e);
            // dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const loadComments = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.get(serverApi + `api/cards/loadComments`, { headers: { Authorization: `Bearer ${token}` } });

            dispatch(addCommentAction(res.data))


        } catch (e) {
            console.log(e);
            // dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const getLessons = (cardId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(serverApi + "api/cards/getLessons", { cardId }, { headers: { Authorization: `Bearer ${token}` } });

            dispatch(getLessonsAction(res.data.lessons))

        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const addCard = (title, text, type, image, promoTitle, promoSubtitle, price, willLearn, description, userId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const formData = new FormData();

            formData.append("title", title);
            formData.append("text", text);
            formData.append("type", type);
            formData.append("file", image);
            formData.append("promoTitle", promoTitle);
            formData.append("promoSubtitle", promoSubtitle);
            formData.append("price", price);
            formData.append("willLearn", JSON.stringify(willLearn));
            formData.append("description", description);
            formData.append("userId", userId);


            const res = await axios.post(
                "http://localhost:5000/api/cards/add",
                formData,
                {
                    headers: {

                        "Content-Type": "multipart/form-data",
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            dispatch(addCardAction(res.data.card))
            dispatch(setMessageAction(res.data.message))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
            return e.response
        }
    }
}

export const getCard = (cardId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(serverApi + "api/cards/" + cardId, { id: cardId }, { headers: { Authorization: `Bearer ${token}` } })
            dispatch(getCardAction(res.data.card))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const changeCardInfo = (id, promo, card, image) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const formData = new FormData()
            formData.append('image', image)
            Object.keys(promo).forEach(key => formData.append(key, promo[key]))
            Object.keys(card).forEach(key => formData.append(key, card[key]))




            const res = await axios.put(serverApi + "api/cards/" + id, formData, {
                headers: {

                    "Content-Type": "multipart/form-data",
                    'Authorization': `Bearer ${token}`

                },
            })

            dispatch(setMessageAction(res.data.message))
        } catch (error) {
            dispatch(setErrorAction(error.response.data.message))
        }
    }
}


export const getCardPromo = (cardId) => {
    return async dispatch => {
        try {
            const res = await axios.post(serverApi + "api/cards/" + cardId + '/promo', { id: cardId })
            dispatch(getCardPromoAction(res.data.promo))

        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const changeLessonBlock = (blockId, title) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.put(serverApi + "api/cards/changeLessonBlock", { blockId, title }, { headers: { Authorization: `Bearer ${token}` } })


        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}

export const removeCard = (cardId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.delete(serverApi + "api/cards/" + cardId, { headers: { Authorization: `Bearer ${token}` }, data: { id: cardId } })
            dispatch(removeCardAction(cardId))
            dispatch(setMessageAction(res.data.message))
        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const addToFavorite = (cardId, userId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.put(serverApi + "api/user/" + cardId + '/addToFav', { cardId: cardId, userId }, { headers: { Authorization: `Bearer ${token}` } })

            dispatch(addToFavoriteAction(res.data))

        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}
export const removeFromFavorite = (cardId, userId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.put(serverApi + "api/user/" + cardId + '/removeFromFav', { cardId: cardId, userId }, { headers: { Authorization: `Bearer ${token}` } })

            dispatch(removeFromFavoriteAction(res.data))

        } catch (e) {
            dispatch(setErrorAction(e.response.data.message))
        }
    }
}