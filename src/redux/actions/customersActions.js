import axios from 'axios';

export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';
export const GET_CUSTOMERS_FAILURE = 'GET_CUSTOMERS_FAILURE';

export const getCustomers = () => ({ type: GET_CUSTOMERS });

export const getCustomersSuccess = customers => ({
    type: GET_CUSTOMERS_SUCCESS,
    payload: customers,
});

export const getCustomersFailure = () => ({ type: GET_CUSTOMERS_FAILURE });


export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch(getCustomers());
        axios.get('http://localhost:3001/customers')
            .then(res => {
                const data = res.data;
                dispatch(getCustomersSuccess(data));
            })
            .catch(error => {
                dispatch(getCustomersFailure());
            })
    }
}
