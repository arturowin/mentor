import * as types from './types';

export const signupStepOne = (payload) => ({
    type: types.SIGNUP_STEP_ONE,
    payload
})

export const signupStepTwoLoading = () => ({
    type: types.SIGNUP_STEP_TWO_LOADING,
})

export const logoutUser = () => ({
    type: types.LOGOUT,
})