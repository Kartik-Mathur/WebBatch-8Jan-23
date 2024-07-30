const initialState = [];

function restaurantReducer(state = { initialState }, action) {
    switch (action.type) {
        case 'SET_RESTAURANTS':
            return action.payload;
        case 'GET_RESTAURANTS':
            return state;
        default:
            return state;
    }
}

export default restaurantReducer;