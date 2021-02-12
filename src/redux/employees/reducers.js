import * as types from './types';

const initialState = {
    data :[],
    groups: [],
    error: false,
    loading: false,
}

export default function(state = initialState, action) {
    const data = action.payload;
    switch(action.type) {
            case types.FETCH_EMPLOYEES_LOADING: {
                return {...state, loading: true};
            }
            case types.FETCH_EMPLOYEES_LOADED: {
                return {...state, data, loading: false, error: false};
            }
            case types.FETCH_EMPLOYEES_ERROR: {
                return {...state, error: true};
            }
            case types.FETCH_EMPLOYEE_GROUPS_LOADING: {
                return {...state, loading: true};
            }
            case types.FETCH_EMPLOYEE_GROUPS_LOADED: {
                return {...state, groups: data, error: false };
            }
            case types.FETCH_EMPLOYEE_GROUPS_ERROR: {
                return {...state, error: true};
            }
            default:
                return state;
    }
}