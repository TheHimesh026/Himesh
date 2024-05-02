import {configureStore,createSlice} from "@reduxjs/toolkit"
import privacySlice from './privacy.js'
import counterSlice from './counter.js'

const counterStore = configureStore({reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
}});

export default counterStore;
