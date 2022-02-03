import { ADD_CARD, GET_ALL_CARDS, GET_CARD_PROMO, REMOVE_CARD, } from "../actions"

const initialState = {
    cards: [],
    currentPromo: {}


}

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARDS:
            return { ...state, cards: action.payload }
        case ADD_CARD:
            return { ...state, cards: [...state.cards, action.payload] }
        case GET_CARD_PROMO:
            return { ...state, currentPromo: action.payload }
        case REMOVE_CARD:
            return { ...state, cards: state.cards.filter(card => card._id !== action.payload) }
        default:
            return state
    }
}
