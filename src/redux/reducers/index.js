import { combineReducers } from 'redux'

import customersReducer from './customersReducer'
import customerAddressReducer from './customerAddressReducer'


const rootReducer = combineReducers({
  customers: customersReducer,
  addresses: customerAddressReducer
})

export default rootReducer
