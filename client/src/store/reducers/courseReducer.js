import { ADD_COMMENT, ADD_LESSON, ADD_LESSON_BLOCK, DELETE_BLOCK, DELETE_LESSON, GET_ALL_CARDS, GET_CARD, GET_CARD_PROMO, GET_LESSONS, REMOVE_CARD, } from "../actions"

const initialState = {
    cards: [],
    currentPromo: {},
    isLoading: true,
    currentCard: {},
    isFetching: true,
    currentLessons: [],
    comments: []




}

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARDS:
            return { ...state, cards: action.payload, isLoading: false }
        case GET_LESSONS:
            return { ...state, currentLessons: action.payload }
        case GET_CARD:
            return { ...state, currentCard: action.payload, isFetching: false }
        case ADD_LESSON:
            return { ...state, lesson: action.payload }
        case GET_CARD_PROMO:
            return { ...state, currentPromo: action.payload }
        case ADD_COMMENT:
            return {
                ...state, comments: action.payload
            }
        case ADD_LESSON_BLOCK:
            return {
                ...state, currentLessons: [...state.currentLessons, action.payload]
            }
        case DELETE_BLOCK:
            return {
                ...state, currentLessons: [...state.currentLessons.filter(el => el._id !== action.payload)]
            }

        case REMOVE_CARD:
            return { ...state, cards: state.cards.filter(card => card._id !== action.payload) }
        default:
            return state
    }
}
