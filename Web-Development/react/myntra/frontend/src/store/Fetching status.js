import { createSlice } from '@reduxjs/toolkit';

const fetchingStatusSlice = createSlice({
name: 'fetchingStatus',
initialState: {
currentlyFetching: false,
fetchDone: false,
},
reducers: {

markFetchingStarted: (state) => {
state.currentlyFetching = true;
},

markFetchingFinished: (state) => {
state.currentlyFetching = false;
},

markFetchDone: (state) => {
state.fetchDone = true;
},

},
});

export default fetchingStatusSlice;
  export const fetchingStatusActions = fetchingStatusSlice.actions;