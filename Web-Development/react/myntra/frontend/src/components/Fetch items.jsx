import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {itemsSliceActions} from '../store/itemsSlice.js'
import {fetchingStatusActions} from '../store/Fetching status.js'

const FetchItems = () => {
const fetchingStatus = useSelector(store => store.fetchingStatus);
const dispatch = useDispatch();

useEffect(() => {
if (fetchingStatus.fetchDone) return;

const controller = new AbortController();
const signal = controller.signal;

dispatch(fetchingStatusActions.markFetchingStarted());
fetch("http://localhost:8080/items", { signal })
.then(res => res.json())
.then(({items}) => {
dispatch(fetchingStatusActions.markFetchDone())
dispatch(itemsSliceActions.addInitialItems(items))
dispatch(fetchingStatusActions.markFetchingFinished())
});

return () => {
controller.abort();
};
}, [fetchingStatus]);

return (<> </> );
};

export default FetchItems;