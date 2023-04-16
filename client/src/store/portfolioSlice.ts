import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";

export interface DrawerStatus {
    drawerStatus: boolean
}

const initialState ={
    drawerStatus: true
}

export const portfolioSlice = createSlice({
    name: "portflio",
    initialState,
    reducers: {
        setDrawerStatus(state, action) {
            state.drawerStatus = action.payload
        }
    }
})

export const { setDrawerStatus } = portfolioSlice.actions;
export const selectAuthState = (state: AppState) => state.portflio.drawerStatus;
export default portfolioSlice.reducer;