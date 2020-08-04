import {GET_CUSTOMERS, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_FAILURE} from '../actions/customersActions'

const initialState = {
    loading: false,
    hasErrors: false,
    customers: [],
}

const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return { 
                ...state, 
                loading: true }
        case GET_CUSTOMERS_SUCCESS:
            return { 
                customers: action.payload, 
                loading: false, 
                hasErrors: false }
        case GET_CUSTOMERS_FAILURE:
            return { 
                ...state, 
                loading: false, 
                hasErrors: true }
        default:
            return state
    }
}

export default customersReducer;
