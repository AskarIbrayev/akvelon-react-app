import { createSlice } from '@reduxjs/toolkit'

export interface isAuthState {
  value: Boolean
}
// the isAuth state is stored in session storage in order to 
// keep its state when the page is reloaded or url is hardtyped 
const initialState: isAuthState = {
    value: sessionStorage.getItem('isAuth') ? true : false,
}
export const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        login:(state) => {
            state.value = true;
            sessionStorage.setItem('isAuth', JSON.stringify(true))
        },
        logout:(state) => {
            state.value = false;
            sessionStorage.clear()
        }
        
    }
})
export const { login, logout} = isAuthSlice.actions

export default isAuthSlice.reducer