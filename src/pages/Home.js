import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
//import axios from 'axios'

import { fetchCustomers } from '../redux/actions/customersActions'
import { fetchCustomerAddress } from '../redux/actions/customerAddressAction'

import CustomersList from "../components/CustomersList";
import AddressList from "../components/AddressList";


const Home = ({ dispatch, customers, addresses }) => {

    const [customerID, setCustomerID] = useState(0);

    useEffect(() => {
        dispatch(fetchCustomers())
    }, [dispatch]);

    useEffect(() => {
        if(customerID > 0) {
            dispatch(fetchCustomerAddress(customerID))
        }
    }, [dispatch, customerID]);

    return(
            <div className="mainbody">
                <div className="container">
                    <CustomersList customers = {customers.customers} setCustomerID={setCustomerID}/>
                    {addresses.addresses.length > 0  ? <AddressList addresses = {addresses.addresses}/> : "" }
                </div>
                
            </div>
        )
}


const mapStateToProps = state => {
    return {
        customers: state.customers,
        addresses: state.addresses
    }
}

export default connect(mapStateToProps)(Home);