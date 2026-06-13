import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    role: sessionStorage.getItem("role") || null,
    banner: sessionStorage.getItem("banner") || false
};

const adminStateSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
            sessionStorage.setItem("role", action.payload)
        },
        setBanner: (state, action) => {
            state.banner = action.payload
            if (action.payload) {
                sessionStorage.setItem("banner", action.payload)
            } else {
                sessionStorage.removeItem("banner")
            }
        }
    }
});

export const { setRole, setBanner } = adminStateSlice.actions;
export default adminStateSlice.reducer;