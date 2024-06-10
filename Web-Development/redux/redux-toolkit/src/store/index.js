import {configureStore} from "@reduxjs/toolkit"
import privacySlice from './privacy.js'
import counterSlice from './counter.js'

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer, //pass the store slices to it with the name defined in reducer
    privacy: privacySlice.reducer
  }
});

export default counterStore;
