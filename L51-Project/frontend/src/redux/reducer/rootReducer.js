import { combineReducers } from 'redux'
import userReducer from './userReducer'
import restaurantReducer from './restaurantReducer'

const rootReducer = combineReducers({
    userReducer,
    restaurantReducer
})
export default rootReducer
