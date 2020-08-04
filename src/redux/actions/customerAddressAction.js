import axios from 'axios';

export const GET_ADDRESSES = 'GET_ADDRESSES';
export const GET_ADDRESSES_SUCCESS = 'GET_ADDRESSES_SUCCESS';
export const GET_ADDRESSES_FAILURE = 'GET_ADDRESSES_FAILURE';

export const getAddresses = () => ({ type: GET_ADDRESSES });

export const getAddressesSuccess = addresses => ({
    type: GET_ADDRESSES_SUCCESS,
    payload: addresses,
});

export const getAddressesFailure = () => ({ type: GET_ADDRESSES_FAILURE });


export const fetchCustomerAddress = (customerId) => {
    return (dispatch) => {
        dispatch(getAddresses());
        axios.get(`http://localhost:3001/address/${customerId}`)
            .then(res => {
                const data = res.data;
                dispatch(getAddressesSuccess(data));
            })
            .catch(error => {
                dispatch(getAddressesFailure());
            })
    }
}
