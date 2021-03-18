import * as appTypes from './appTypes';

const INITIAL_STATE = {
    version: 0.1,
    isAppLoaded: false
}

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appTypes.SET_APP_IS_LOADED:
            return {
                ...state,
                isAppLoaded: true
            }
        default:
            return state;
    }
}

export default appReducer;