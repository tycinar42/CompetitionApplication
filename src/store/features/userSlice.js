import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import UserService from '../../config/UserService';
const initialStateUser={
    onlineUsers: [],
}

export const fetchDoOnline= createAsyncThunk(
    'user/fetchDoOnline',    
    async (payload)=>{    
        try{
            const response = await fetch(UserService.doOnline,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+payload
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
export const fetchDoOffline= createAsyncThunk(
    'user/fetchDoOffline',    
    async (payload)=>{    
        try{
            const response = await fetch(UserService.doOffline,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+payload             
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
export const fetchOnLineList= createAsyncThunk(
    'user/fetchOnLineList',    
    async (payload)=>{    
        try{
            const response = await fetch(UserService.getAllOnlineList,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+payload            
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
       
    }
});

export default userSlice.reducer;