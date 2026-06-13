import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTheme: localStorage.getItem("theme") || "light"
};

const themeModeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setThemeMode: (state, action) => {
            state.activeTheme = action.payload;
            localStorage.setItem("theme", action.payload);
        }
    }
});

export const { setThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;