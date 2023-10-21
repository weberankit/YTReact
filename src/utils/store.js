import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import filterSlice from "./filterSlice";
import coomentSlice from "./coomentSlice";
const store= configureStore({
    reducer:{
    app:appSlice,
    search:searchSlice,
    chat:chatSlice,
    filter:filterSlice,
    comment:coomentSlice,
    }
})
export default store;