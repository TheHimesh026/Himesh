import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice.js'
import fetchingStatusSlice from './Fetching status.js'
import bagSlice from './Bag slice.js'

const myntraStore = configureStore({
reducer: {
items: itemsSlice.reducer,
fetchingStatus: fetchingStatusSlice.reducer,
bag: bagSlice.reducer,
},
});

export default myntraStore;