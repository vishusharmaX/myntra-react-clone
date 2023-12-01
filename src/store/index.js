import {
    configureStore,
} from '@reduxjs/toolkit';
import itemSLice from './itemsSlice';
import fetchStatusSlice from './fetchStatusSlice';
import bagSlice from './bagSlice';






const myntraStore = configureStore({
    reducer: {
        items: itemSLice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,

    }
})


export default myntraStore;