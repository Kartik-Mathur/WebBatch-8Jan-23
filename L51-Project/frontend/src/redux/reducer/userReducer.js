const initialState = {
    name: '',
    email: '',
    username: "",
    image: '',
    orderHistory: [],
    isLoggedIn: false
};

function userReducer(state = { initialState }, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                username: action.payload.username,
                image: action.payload.image,
                orderHistory: action.payload.orderHistory,
                isLoggedIn: true
            }
        case 'GET_USER':
            return state;
        default:
            return state;
    }

}

export default userReducer;