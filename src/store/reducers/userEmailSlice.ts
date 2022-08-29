import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// this reducer is used to keep the email of the loged user in order determine the user 
// and render its information on the main page 

export interface userEmailState {
  value: string
} 
const initialState: userEmailState = {
    // value: 'as',
    value: sessionStorage.getItem('userEmail') || '',
} 
export const userEmailSlice = createSlice({
    name: 'userEmail',
    initialState,
    reducers: {
        keepEmail:(state, action: PayloadAction<string>) => {
            state.value = action.payload;
            sessionStorage.setItem('userEmail', action.payload)
        }
    }
})
export const {keepEmail} = userEmailSlice.actions

export default userEmailSlice.reducer