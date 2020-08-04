import React, {Fragment} from 'react'

const Customer = ({ customer }) => (
	
		<Fragment>
			<div className="id">{customer.id}</div>
			<div>Name: {customer.name}</div>
			<div>Age: {customer.age}</div>
		</Fragment>
	
	
)

export default Customer;
