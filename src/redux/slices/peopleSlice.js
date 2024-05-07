import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {peopleService} from "../../services";

let initialState={
    peopleAll:[],
    count:null,
    next:null,
    previous:null,
    films:[]

}

const getAll=createAsyncThunk(
    'peopleSlice/getAll',
    async ({page}, thunkAPI)=>{
        try {
            const {data}=await peopleService.getAll(page)
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
);

const getInfo=createAsyncThunk(
    'peopleSlice/getInfo',
    async ({id}, thunkAPI)=>{
        try {
            const {data}=await peopleService.getById(id)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getAllFilm=createAsyncThunk(
    'peopleSlice/getAllFilm',
    async (_, thunkAPI)=>{
        try {
            const {data}=await peopleService.getAllFilms()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)



const peopleSlice=createSlice({
    name:'peopleSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.peopleAll=action.payload.results
                state.count=action.payload.count
                state.next=action.payload.next
                state.previous=action.payload.previous
            })
            .addCase(getInfo.fulfilled, (state, action) => {
                state.peopleAll=action.payload.results

            })
            .addCase(getAllFilm.fulfilled, (state, action) => {
                state.films=action.payload
            })
})
const {reducer:peopleReducer, actions}=peopleSlice
const peopleActions={
    ...actions,
    getAll,
    getInfo,
    getAllFilm
}

export {
    peopleReducer,
    peopleActions
}