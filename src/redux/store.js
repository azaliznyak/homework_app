import {configureStore} from "@reduxjs/toolkit";
import {peopleReducer} from "./slices";

const store=configureStore({
    reducer:{
        people:peopleReducer
    }
})

export {store}