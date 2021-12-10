const initialState = {
    cards: [
        {
            id: 1,
            title: "Python",
            text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
            img: "image 2.png",
            type: "design",
            popular: 10,
            coursePromo: {
                title: '1Полное руководство по Python 3: от новичка до специалиста',
                subtitle: 'Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL',
                willLearn: ['Писать простые программы на Python 3', 'Как писать простые игры типа крестиков-ноликов', 'Использование Jupyter Notebook', 'что-то еще'],
                description: ['Python стабильно входит в ТОП-10 наиболее популярных языков программирования. Это именно тот язык с которого стоит начинать изучать программирование. Благодаря своей простоте и элегантности, Python позволяет новичкам не вникать во множество сложных программных понятий и конструкций, присущих другим языкам. Короче говоря, если вы только начинаете своё путешествие в мир программирования, Python станет отличным выбором в качестве вашего первого языка программирования.', 'Популярность Python объясняется не только тем, что его легко изучать, но и реальными преимуществами языка в смысле его профессионального применения для решения сложных проблем автоматизации. Python - кросс-платформенный язык и работает под Windows, Linux, Mac OS. Множество архитектурных конструкций в этом языке строятся без нагромождения абстракций, как часто происходит в других ЯП (языках программирования). Огромное количество уже готовых библиотек даёт возможность не изобретать велосипеды на каждом шагу.'],
            }

        },
        {
            id: 2,
            title: "Ржавый скрипт",
            text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
            img: "image 3.png",
            type: "programming",
            favorite: false,
            popular: 5,
            coursePromo: {
                title: '2Полное руководство по Python 3: от новичка до специалиста',
                subtitle: 'Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL',
                willLearn: ['Писать простые программы на Python 3', 'Как писать простые игры типа крестиков-ноликов', 'Использование Jupyter Notebook', 'что-то еще'],
                description: ['Python стабильно входит в ТОП-10 наиболее популярных языков программирования. Это именно тот язык с которого стоит начинать изучать программирование. Благодаря своей простоте и элегантности, Python позволяет новичкам не вникать во множество сложных программных понятий и конструкций, присущих другим языкам. Короче говоря, если вы только начинаете своё путешествие в мир программирования, Python станет отличным выбором в качестве вашего первого языка программирования.', 'Популярность Python объясняется не только тем, что его легко изучать, но и реальными преимуществами языка в смысле его профессионального применения для решения сложных проблем автоматизации. Python - кросс-платформенный язык и работает под Windows, Linux, Mac OS. Множество архитектурных конструкций в этом языке строятся без нагромождения абстракций, как часто происходит в других ЯП (языках программирования). Огромное количество уже готовых библиотек даёт возможность не изобретать велосипеды на каждом шагу.'],
            }
        },
        {
            id: 3,
            title: "Самый популярный Дизайн",
            text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
            img: "image 3.png",
            type: "design",
            favorite: false,
            popular: 150,
            coursePromo: {
                title: '3Полное руководство по Python 3: от новичка до специалиста',
                subtitle: 'Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL',
                willLearn: ['Писать простые программы на Python 3', 'Как писать простые игры типа крестиков-ноликов', 'Использование Jupyter Notebook', 'что-то еще'],
                description: ['Python стабильно входит в ТОП-10 наиболее популярных языков программирования. Это именно тот язык с которого стоит начинать изучать программирование. Благодаря своей простоте и элегантности, Python позволяет новичкам не вникать во множество сложных программных понятий и конструкций, присущих другим языкам. Короче говоря, если вы только начинаете своё путешествие в мир программирования, Python станет отличным выбором в качестве вашего первого языка программирования.', 'Популярность Python объясняется не только тем, что его легко изучать, но и реальными преимуществами языка в смысле его профессионального применения для решения сложных проблем автоматизации. Python - кросс-платформенный язык и работает под Windows, Linux, Mac OS. Множество архитектурных конструкций в этом языке строятся без нагромождения абстракций, как часто происходит в других ЯП (языках программирования). Огромное количество уже готовых библиотек даёт возможность не изобретать велосипеды на каждом шагу.'],
            }
        },
        {
            id: 4,
            title: "Менее популярный Дизайн",
            text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
            img: "image 3.png",
            type: "design",
            favorite: false,
            popular: 100,
            coursePromo: {
                title: '4Полное руководство по Python 3: от новичка до специалиста',
                subtitle: 'Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL',
                willLearn: ['Писать простые программы на Python 3', 'Как писать простые игры типа крестиков-ноликов', 'Использование Jupyter Notebook', 'что-то еще'],
                description: ['Python стабильно входит в ТОП-10 наиболее популярных языков программирования. Это именно тот язык с которого стоит начинать изучать программирование. Благодаря своей простоте и элегантности, Python позволяет новичкам не вникать во множество сложных программных понятий и конструкций, присущих другим языкам. Короче говоря, если вы только начинаете своё путешествие в мир программирования, Python станет отличным выбором в качестве вашего первого языка программирования.', 'Популярность Python объясняется не только тем, что его легко изучать, но и реальными преимуществами языка в смысле его профессионального применения для решения сложных проблем автоматизации. Python - кросс-платформенный язык и работает под Windows, Linux, Mac OS. Множество архитектурных конструкций в этом языке строятся без нагромождения абстракций, как часто происходит в других ЯП (языках программирования). Огромное количество уже готовых библиотек даёт возможность не изобретать велосипеды на каждом шагу.'],
            }
        },
    ],

}

// const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
// const GET_POPULAR_CARDS = 'GET_POPULAR_CARDS'

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TO_FAVORITE:
        //     return {
        //         ...state, cards: state.cards.map(card => card.id === action.payload ? { ...card, favorite: !card.favorite } : card)
        //     }
        // case GET_POPULAR_CARDS:
        //     return {
        //         ...state, cards: state.cards.sort((a, b) => (a.popular < b.popular ? 1 : -1))
        //     }

        default:
            return state
    }
}
