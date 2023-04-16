import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";

export interface PortfolioEntity {
  drawerStatus: boolean;
  sidebarTab: "Files" | "Search" | "Github" | "";
}

const initialState: PortfolioEntity = {
  drawerStatus: true,
  sidebarTab: "Files",
};

export const portfolioSlice = createSlice({
  name: "portflio",
  initialState,
  reducers: {
    setDrawerStatus(state, action) {
      state.drawerStatus = action.payload;
    },
    setSidebarTab(state, action) {
      state.sidebarTab = action.payload;
    },
  },
});

export const { setDrawerStatus, setSidebarTab } = portfolioSlice.actions;
export const selectAuthState = (state: AppState) => state.portflio.drawerStatus;
export default portfolioSlice.reducer;
