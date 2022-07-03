import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    webinarList: null,
    webinar: null,
}


const webinar = createSlice({
    name: 'webinar',
    initialState,
    reducers: {
        setWebinarList(state, action) {
            state.webinarList = action.payload
        },
        setWebinar(state, action){
            state.webinar = action.payload;
        }
    }
})

export const {
    setWebinarList,
    setWebinar
} = webinar.actions;

export default webinar.reducer
