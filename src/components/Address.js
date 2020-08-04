import React from 'react'

const Address = ({ address }) => (
		<div className='address'>
			<div>{address.address}</div>
			<div>{address.city} {address.state}</div>
			<div>{address.country} - {address.pincode}</div>
		</div>
	
	
)

export default Address;
