import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    greeting: '',
    loading: true,
    error: null
}

export const fetchGreeting = createAsyncThunk(
    'greeting/fetchGreeting',
    async () => {
        const response = await fetch('/api/greeting');
        const greeting = await response.json();
        return greeting;
    }
)

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchGreeting.pending, (state) => {
            state.loading = true;
        }
        )
        .addCase(fetchGreeting.fulfilled, (state, action) => {
            state.loading = false;
            state.greeting = action.payload;
        }
        )
        .addCase(fetchGreeting.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
        )
})

export default greetingSlice.reducer;
