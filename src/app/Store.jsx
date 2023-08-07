import {configureStore} from "@reduxjs/toolkit" 
import CartSlice from "../Features/Cart/CartSlice"
import FilterSlice from "../Features/Filter/FilterSlice"

const store = configureStore ({
    reducer:{
        cart : CartSlice,
        filter : FilterSlice,
    },
})


export default store