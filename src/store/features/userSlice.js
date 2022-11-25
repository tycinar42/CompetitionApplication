import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import UserService from '../../config/UserService';
const initialStateUser={
    onlineUsers: [],
    myprofile: null,
}

export const fetchDoOnline= createAsyncThunk(
    'user/fetchDoOnline',    
    async (payload)=>{           
        try{
            const response = await fetch(UserService.doOnline,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
                        'Authorization': 'Bearer '+payload.token
                    },        
                    body: JSON.stringify({
                        token: payload.token
                    }),
                }).then(data => data.json())
                .then(data => data);
                //.catch(err => console.log('Hatalı geldi....: ',err));    
                return response;
        }catch(e){
       //     console.log('Hata: ',e);
        }

      
    }
);
export const fetchDoOffline= createAsyncThunk(
    'user/fetchDoOffline',    
    async (payload)=>{    
        try{
            const response = await fetch(UserService.doOffline,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
                        'Authorization': 'Bearer '+payload.token            
                    },        
                    body: JSON.stringify({
                        token: payload.token
                    }),
                }).then(data => data.json())
                .then(data => data);
                //.catch(err => console.log('Hatalı geldi....: ',err));    
                return response;
        }catch(e){
       //     console.log('Hata: ',e);
        }

      
    }
);
export const fetchOnLineList= createAsyncThunk(
    'user/fetchOnLineList',    
    async (payload)=>{    
        try{
            const response = await fetch(UserService.getAllOnlineList,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+payload.token            
                    },        
                    body:  {
                        'token': payload.token
                    },
                }).then(data => data.json())
                .then(data => data);
                //.catch(err => console.log('Hatalı geldi....: ',err));    
                return response;
        }catch(e){
       //     console.log('Hata: ',e);
        }

      
    }
);
export const fetchMyProfile= createAsyncThunk(
    'user/fetchMyProfile',    
    async (payload)=>{           
        try{
            const response = await fetch(UserService.getMyProfile,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
                        'Authorization': 'Bearer '+payload.token
                    },        
                    body: JSON.stringify({
                        token: payload.token
                    }),
                }).then(data => data.json())
                .then(data => data);
               
                return response;
        }catch(e){
       //     console.log('Hata: ',e);
        }

      
    }
);
const userSlice= createSlice({
    name: 'user',
    initialState: initialStateUser,
    /**
     * initial state içindeki değerleri set etmek için kullanılır.
     */
    reducers:{},
    /**
     * async işlemler için kullanılır.
     */
    extraReducers:(build)=> {
        build.addCase(fetchOnLineList.pending,(state)=>{
          
        });
        build.addCase(fetchOnLineList.fulfilled,(state,action)=>{          
            state.onlineUsers = action.payload;
        });
        build.addCase(fetchOnLineList.rejected,(state)=>{
          
        });
        build.addCase(fetchMyProfile.fulfilled,(state,action)=>{ 
                   
            state.myprofile = action.payload;
        });
       
    }
});

export default userSlice.reducer;