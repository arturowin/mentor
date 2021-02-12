import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger'

import authReducer from './auth'
import employeeReducer from './employees'

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer
})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth']
}

const pReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(pReducer, composeEnhancers(
    applyMiddleware(thunk, createLogger())
  ))
}

const store = configureStore()

const persistor = persistStore(store)

export { store, persistor }
