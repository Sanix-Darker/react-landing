import { combineReducers } from 'redux';
import contact from './contact';
import promo from './promo';
import quote from './quote';

import subscribe from './subscribe';

export default combineReducers({
    subscribe,
    contact,
    promo,
    quote
});
