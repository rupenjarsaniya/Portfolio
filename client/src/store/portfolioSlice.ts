import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";

export interface PortfolioEntity {
  drawerStatus: boolean;
  sidebarTab: "Files" | "Search" | "Github" | "";
  currentTab: Array<{ image: string; title: string }>;
  currentFile: string;
}

const initialState: PortfolioEntity = {
  drawerStatus: true,
  sidebarTab: "Files",
  currentTab: [],
  currentFile: "",
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
    setCurrentTab(state, action) {
      const haveOne = state.currentTab.find(
        (t: any) => t.title === action.payload.title
      );
      if (haveOne) return;
      state.currentTab.push({
        title: action.payload.title,
        image: action.payload.image,
      });
    },
    setPopCurrentTab(state, action) {
      state.currentTab = state.currentTab.filter(
        (s) => s.title !== action.payload
      );
    },
    setCurrentFile(state, action) {
      state.currentFile = action.payload;
    },
  },
});

export const {
  setDrawerStatus,
  setSidebarTab,
  setCurrentTab,
  setPopCurrentTab,
  setCurrentFile,
} = portfolioSlice.actions;
export const selectAuthState = (state: AppState) => state.portflio.drawerStatus;
export default portfolioSlice.reducer;
