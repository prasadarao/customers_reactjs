import React from 'react';
import Address from './Address';


const AddressList = (props) => {
	return (
		<div className="right-container">
			<h3>Addresses</h3>
			{props.addresses.isLoading ? (
        		<div>Loading ...</div>
      		) : props.addresses.length > 0 ?(
					<ul>
					{
						props.addresses &&
						props.addresses.map( address => {
							return(<li key={address.id}>
								<Address address={address} />
							</li>)
								
						})
					}
					</ul>)
				: (<div>No addresses found</div>)
			}
		</div>
	)
}

export default AddressList;
    