import {GET_ADDRESSES, GET_ADDRESSES_SUCCESS, GET_ADDRESSES_FAILURE} from '../actions/customerAddressAction'

const initialState = {
    loading: false,
    hasErrors: false,
    addresses: [],
}

const customerAddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESSES:
            return { 
                ...state, 
                loading: true }
        case GET_ADDRESSES_SUCCESS:
            return { 
                addresses: action.payload, 
                loading: false, 
                hasErrors: false }
        case GET_ADDRESSES_FAILURE:
            return { 
                ...state, 
                loading: false, 
                hasErrors: true }
        default:
            return state
    }
}

export default customerAddressReducer;
