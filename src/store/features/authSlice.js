import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../../config/AuthService';

const initialStateAuth = {
    token: '',
    auth: [],
    isAuthenticated: false,
    isLoadingLogin: false,
    isLoadingRegister: false,
};

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    /**
     * payload -> iligili metodumuza dışarıdan girilen bilgilerdir.
     * Eğer sadece bir değer girerseniz payload o değer olacaktır.
     * Ancak, eğer bir dizi ya da json object girerseniz bu kullanıma göre payload
     * şu şekilde kullanılır -> {username: 'test', password: 'pswrd'}
     * örn: dispatch(fetchRegister({username: 'ali'}))
     * datayı metot içinde almak için ise -> payload.username olacaktır.
     */

    /**
     * 
     * @param {"username": "", "password": "", "email": "", "admincode": ""} payload 
     */
    async(payload) => {
        const response = await fetch(AuthService.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
        console.log(response);
        return response.json();
    }
);

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async(payload) => {
        const response = await fetch(AuthService.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        }).then(data => data.json())
        .then(data => data)
        .catch(err => console.log(err));
        return response;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    /**
     * initial state içindeki değerleri set etmek için kullanılır.
     */

    reducers: {},
    /**
     * async işlemler için kullanılır.
     */

    extraReducers:(build) => {
        build.addCase(fetchRegister.pending, (state) => {
            state.isLoadingRegister = true;
        });
        build.addCase(fetchRegister.fulfilled, (state, action) => {
            state.isLoadingRegister = false;
            state.auth = action.payload;
        });
        build.addCase(fetchRegister.rejected, (state) => {
            state.isLoadingRegister = false;
        });
        build.addCase(fetchLogin.pending,(state)=>{
            state.isLoadingLogin=true;
        });    
        build.addCase(fetchLogin.fulfilled,(state,action)=>{
            console.log(action.payload);           
            state.isLoadingLogin=false;
            state.token = action.payload.token;
        });
        build.addCase(fetchLogin.rejected,(state)=>{
            state.isLoadingLogin=false;
        });

    }
});
export default authSlice;