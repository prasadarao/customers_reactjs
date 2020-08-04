import React from 'react';
import Customer from './Customer';


const CustomersList = (props) => {
	return (
		<div className="customers left-container">
			<ul>
			{
				props.customers &&
				props.customers.map( customer => {
					return(<li className="customer" key={customer.id} onClick={() => props.setCustomerID(customer.id)}>
						<Customer customer={customer}/>
					</li>)
						
				})
			}
			</ul>
		</div>
	)
}

export default CustomersList;
    