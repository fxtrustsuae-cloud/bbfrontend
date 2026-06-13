import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTheme: sessionStorage.getItem("theme") || "light"
};

const themeModeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setThemeMode: (state, action) => {
            state.activeTheme = action.payload;
            sessionStorage.setItem("theme", action.payload);
        }
    }
});

export const { setThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;