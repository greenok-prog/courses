const initialState = {
    cards: [
        {
            id: 1,
            title: "Python",
            text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
            img: "image 2.png",
            type: "design",
            favorite: false
        },
        {
            id: 2,
            title: "Ржавый скрипт",
            text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
            img: "image 3.png",
            type: "programming",
            favorite: true
        },
        {
            id: 3,
            title: "Дизайн",
            text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
            img: "image 3.png",
            type: "design",
            favorite: false
        },
    ]
}

const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
const GET_FAVORITE_CARDS = 'GET_FAVORITE_CARDS'

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state, cards: state.cards.map(card => card.id === action.payload ? { ...card, favorite: !card.favorite } : card)
            }
        case GET_FAVORITE_CARDS:
            return state.cards.filter(card => card.favorite === true)

        default:
            return state
    }
}
