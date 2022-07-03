import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    masterClass: null,
    masterClasses: null,
    allMasterClasses: null,
    totalMasterClasses: 0,
    currentPage: 1,
    allMasterClassesIsLoaded: false,
}


const masterClass = createSlice({
    name: 'masterClass',
    initialState,
    reducers: {
        setMasterClass(state, action) {
            state.masterClass = action.payload
        },
        setMasterClasses(state, action){
            state.masterClasses = action.payload;
        },
        setAllMasterClasses(state, action){
            state.allMasterClasses = action.payload;
        },
        setTotalMasterClasses(state, action){
            state.totalMasterClasses = action.payload;
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload;
        },
        setAllMasterClassesLoaded(state, action){
            state.allMasterClassesIsLoaded = action.payload;
        }
    }
})

export const {
    setMasterClass,
    setMasterClasses,
    setAllMasterClasses,
    setCurrentPage,
    setAllMasterClassesLoaded,
    setTotalMasterClasses
} = masterClass.actions;

export default masterClass.reducer
