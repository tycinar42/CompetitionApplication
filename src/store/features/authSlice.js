import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import AuthService from '../../config/AuthService';
const inititalStateAuth={
    token: '',
    auth: [],
    isAuthenticated: false,
    isLoadingLogin: false,
    isLoadingRegister: false,
};

export const fetchRegister= createAsyncThunk(
    'auth/fetchRegister',
    /**
     * payload -> ilgili methosdumuza dışarıdan girilen bilgilerdir. 
     * Eğer sadece bir değer girerseniz payload o değer olacaktır. 
     * Ancak, eğer bir dizi yada json object girerseniz bu kullanıma göre göre payload şu
     * şekilde kullanılır -> {username: 'test', password: 'test'} 
     * örn: dispatch(fetchRegister({username:'ali'}))
     * datayı method içinde almak için ise -> payload.username olacaktır.
     * 
     */
    /**
     * @param {"username": "", "password": "", "email": "", "admincode": ""} payload 
     */
    async (payload)=>{
        const response = await fetch(AuthService.register,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'              
              },
            body: JSON.stringify(payload),
        }).then(response => response.json())
        .then(data=>data).catch(err=>console.log(err));
        return response;
    }
);
export const fetchLogin= createAsyncThunk(
    'auth/fetchLogin',    
    async (payload)=>{    
        try{
            const response = await fetch(AuthService.login,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'              
                    },        
                    body: JSON.stringify(payload),
                }).then(data => data.json())
                .then(data => data);
                //.catch(err => console.log('Hatalı geldi....: ',err));    
                return response;
        }catch(e){
       //     console.log('Hata: ',e);
        }

      
    }
);
const authSlice= createSlice({
    name: 'auth',
    initialState: inititalStateAuth,
    /**
     * initial state içindeki değerleri set etmek için kullanılır.
     */
    reducers:{},
    /**
     * async işlemler için kullanılır.
     */
    extraReducers:(build)=> {
        build.addCase(fetchRegister.pending,(state)=>{
            state.isLoadingRegister=true;
        });
        build.addCase(fetchRegister.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.isLoadingRegister = false;
            state.auth = action.payload;
        });
        build.addCase(fetchRegister.rejected,(state)=>{
            state.isLoadingRegister = false;
        });
        build.addCase(fetchLogin.pending,(state)=>{
            state.isLoadingLogin=true;
        });    
        build.addCase(fetchLogin.fulfilled,(state,action)=>{
            console.log(action.payload);
            if(action.payload.code === 1402){
                alert(action.payload.message);
            }    else{
                 state.isLoadingLogin=false;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            }  
           
        });
        build.addCase(fetchLogin.rejected,(state)=>{
                     state.isLoadingLogin=false;
        });
    }
});

export default authSlice.reducer;