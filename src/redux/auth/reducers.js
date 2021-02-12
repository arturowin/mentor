import * as types from './types'

const initialState = {
  signupData: {},
  user: {},
  error: false,
  loading: false,
  authToken: ''
}

export default function (state = initialState, action) {
  const payload = action.payload
  switch (action.type) {
    case types.SIGNUP_STEP_ONE: {
      return { ...state, signupData: payload }
    }
    case types.SIGNUP_STEP_TWO_LOADING: {
      return { ...state, loading: true }
    }
    case types.SIGNUP_STEP_TWO_LOADED: {
      return {
        ...state,
        signupData: {},
        user: payload,
        authToken: payload.id,
        loading: false
      }
    }
    case types.SIGNUP_STEP_TWO_ERROR: {
      return { ...state, error: true, loading: false }
    }
    case types.LOGOUT: {
      return { ...initialState }
    }
    default:
      return state
  }
}
