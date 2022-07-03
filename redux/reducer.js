import {configureStore} from "@reduxjs/toolkit";
import main from "./reducers/main";
import masterClass from "./reducers/master-class";
import course from "./reducers/course";
import mentor from "./reducers/mentor";
import webinar from "./reducers/webinar";

import {createWrapper} from 'next-redux-wrapper'

const store = configureStore({
    reducer: {
        main,
        course,
        masterClass,
        webinar,
        mentor
    }, middleware:[]
})
const makeStore = () => store
export const wrapper = createWrapper(makeStore)


