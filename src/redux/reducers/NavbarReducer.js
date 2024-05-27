// import redux toolkit to define state at global level
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// define initial state
const initialState = {
    data : []
};

// export async thunk api to load data when component mount
export const DataAsyncThunk = createAsyncThunk(
    'fetchData',
    async(_,ThunkApi) => {
        try {
            const response = await fetch("https://blackcoffer-visualization-dashboard.onrender.com/api/markets");
            let data = await response.json();
            data = data.slice(0, 30);
            ThunkApi.dispatch(setData(data));
        } catch (error) {
            console.log("Error while fetching data from API :", error);
        }
    }
)

// create slice to set actions and state
const DataSlice = createSlice({
    name : "LaunchCard",
    initialState,
    reducers : {
        setData : (state, action) => {
            state.data = action.payload
        },
    }
})

// export reducer for store
export const DataReducer = DataSlice.reducer;

// export actions to use in other component if necessory
export const {setData} = DataSlice.actions;

// expotr selector to select state defined
export const DataSelector = (state) => state.DataReducer;
