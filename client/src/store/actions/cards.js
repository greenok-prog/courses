import axios from "axios";
import { ADD_CARD_PROMO, ADD_TO_FAVORITE, GET_ALL_CARDS, GET_CARD_PROMO, REMOVE_FROM_FAVORITE } from ".";
import config from '../../config/default.json'

const serverApi = config.API_SERVER
export const getAllCardsAction = (payload) => ({
    type: GET_ALL_CARDS,
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
export const getCardPromoAction = (payload) => ({
    type: GET_CARD_PROMO,
    payload
})
export const addCardPromoAction = (payload) => ({
    type: ADD_CARD_PROMO,
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


export const addCardToFavorite = (userId, card) => {
    return async dispatch => {
        try {

            const res = await axios.post(serverApi + "api/cards/addToFavorite", {
                userId: userId,
                card: card
            });
            dispatch(addToFavoriteAction(card))

            console.log('Карточка была добавлена:', res);
        } catch (e) {
            console.log(e)
        }
    }
}
export const removeCardFromFav = (userId, card) => {
    return async dispatch => {
        try {
            const res = await axios.post(serverApi + "api/cards/removeFromFav", {
                userId: userId,
                card: card
            });
            dispatch(removeFromFavoriteAction(card))
        } catch (e) {

        }
    }
}
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
            const res = await axios.post(serverApi + "api/cards/" + cardId + "/addPromo", { id: cardId, promo: promo })
            // dispatch(addCardPromoAction(res.data))
        } catch (e) {
            console.log(e);
        }
    }
}
