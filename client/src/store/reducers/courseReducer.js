import { GET_ALL_CARDS, GET_CARD_PROMO, } from "../actions"

const initialState = {
    cards: [],
    currentPromo: {}


}

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARDS:
            return { ...state, cards: action.payload }
        case GET_CARD_PROMO:
            return { ...state, currentPromo: action.payload }
        default:
            return state
    }
}
