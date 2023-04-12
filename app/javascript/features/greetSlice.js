import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    greeting: '',
    pending: true,
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
    initialState,
    name: 'greeting',
    extraReducers: (builder) => builder
        .addCase(fetchGreeting.pending, (state) => {
            state.pending= true;
        }
        )
        .addCase(fetchGreeting.fulfilled, (state, action) => {
            state.pending = false;
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
