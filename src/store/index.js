import {configureStore} from '@reduxjs/toolkit';
import {
    authSlice,
    userSlice
} from './features';
const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
    }
});
export default store;