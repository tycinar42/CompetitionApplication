import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import MainService from '../../config/MainService';
const initialStateMain={
    questionsList:[],
    answersList:[],
}

export const fetchFindAllQuestions= createAsyncThunk(
    'main/fetchFindAllQuestions',
    async ()=>{
        try{
           
            const response = await fetch(MainService.findall)
                .then(data => data.json())
                .then(data => data);   
                     
                return response;
        }catch(e){
            console.log('Hata: ',e);
        }
    });

const mainSlice = createSlice({
    name: 'main',
    initialState: initialStateMain,
    reducers: {},
    extraReducers:(build)=> {
        build.addCase(fetchFindAllQuestions.pending, (state, action) => {
            
        });
        build.addCase(fetchFindAllQuestions.fulfilled,(state,action)=>{
            state.questionsList=action.payload;
        });
    }

});

export default mainSlice.reducer;