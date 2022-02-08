import axios from "axios";
import { ADD_CARD, ADD_CARD_PROMO, ADD_TO_FAVORITE, GET_ALL_CARDS, GET_CARD_PROMO, REMOVE_CARD, } from ".";
import config from '../../config/default.json'
import { setMessageAction } from "./user";

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

export const getAllCards = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:5000/api/cards')
            dispatch(getAllCardsAction(res.data))

        } catch (e) {
            console.log(e);
        }
    }
}
export const addCard = (title, text, type, image) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            // const authHeader = { 'Authorization': `Bearer ${token}` }
            const formData = new FormData();
            formData.append("title", title);
            formData.append("text", text);
            formData.append("type", type);
            formData.append("file", image);
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
            console.log(res.data);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }
}


// export const addCardToFavorite = (userId, card) => {
//     return async dispatch => {
//         try {

//             const res = await axios.post(serverApi + "api/cards/addToFavorite", {
//                 userId: userId,
//                 card: card
//             });
//             dispatch(addToFavoriteAction(card))

//             console.log('Карточка была добавлена:', res);
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

export const getCardPromo = (cardId) => {
    return async dispatch => {
        try {
            const res = await axios.post(serverApi + "api/cards/" + cardId, { id: cardId })
            dispatch(getCardPromoAction(res.data.promo))

        } catch (e) {
            console.log(e);
        }
    }
}
export const addCardPromo = (cardId, promo) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(serverApi + "api/cards/" + cardId + "/addPromo", { id: cardId, promo: promo }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setMessageAction(res.data.message))
        } catch (e) {
            console.log(e);
        }
    }
}
export const removeCard = (cardId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.delete(serverApi + "api/cards/" + cardId, { headers: { Authorization: `Bearer ${token}` }, data: { id: cardId } })
            dispatch(removeCardAction(cardId))
            console.log(res.data.message);
        } catch (e) {
            console.log(e);
        }
    }
}