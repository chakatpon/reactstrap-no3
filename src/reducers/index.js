import { combineReducers } from 'redux';

const navbarTogglerReducers = (navOpen = false, action) => {
    switch (action.type) {
        case 'TOGGLE_NAVBAR':
            return !action.payload;
        default:
            return navOpen;
    }
}


export default combineReducers({
    navOpen : navbarTogglerReducers
})