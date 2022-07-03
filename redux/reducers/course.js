import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    courses: null,
    course: null,
    allCourses: null,
    totalCourses: 0,
    currentPage: 1,
    allCoursesLoaded: false,

}
const course = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourses(state, action){
            state.courses = action.payload;
        },
        setCourse(state, action) {
            state.course = action.payload
        },
        setAllCourses(state, action){
            state.allCourses = action.payload;
        },
        setTotalCourses(state, action){
            state.totalCourses = action.payload;
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload;
        },
        setAllCoursesLoaded(state, action){
            state.allCoursesLoaded = action.payload;
        }
    }
})



export const {
    setCourse,
    setCourses,
    setCurrentPage,
    setTotalCourses,
    setAllCourses,
    setAllCoursesLoaded
} = course.actions;

export default course.reducer
