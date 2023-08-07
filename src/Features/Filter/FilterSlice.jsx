import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    stock : false,
    brand : [],
    keywords : "",
};

const filterSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {}
})


export default filterSlice.reducer