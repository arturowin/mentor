import axios from 'axios';
import * as types from './types'
import {signupStepTwoLoading} from './actions'
import * as service from './service';

export const signupUser = (data) => {
    return async (dispatch) => {
        dispatch(signupStepTwoLoading());
        try {
            const res = await service.createUser(data);
            dispatch({type: types.SIGNUP_STEP_TWO_LOADED, payload: res});
        } catch(err) {
            dispatch({type: types.SIGNUP_STEP_TWO_ERROR});
        }
    };
}