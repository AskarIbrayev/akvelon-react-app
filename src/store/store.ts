import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserServices";
import isAuthReducer from './reducers/isAuthSlice'
import userEmailReducer from './reducers/userEmailSlice'

const rootReducer = combineReducers({
    isAuthReducer,
    userEmailReducer,
    [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']