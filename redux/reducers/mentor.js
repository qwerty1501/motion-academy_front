import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mentor: null,


}


const mentor = createSlice({
    name: 'mentor',
    initialState,
    reducers: {
        setMentor(state, action) {
            state.mentor = action.payload
        }
    }
})

export const {setMentor} = mentor.actions;

export default mentor.reducer
