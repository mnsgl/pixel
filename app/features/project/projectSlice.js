import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    save: 0,
    projects: [],
  },
  reducers: {
    setProjectCellColors: (state, payload) => {
      state.projects.map((project) => {
        if (project.pname === payload.payload.pname) {
          project.cellColors[payload.payload.index] = payload.payload.cellColor;
        }
      });
    },
    setIncreaseSaveValue: (state) => {
      state.save += 1;
    },
    setProjects: (state, payload) => {
      state.projects = payload.payload;
    },
    addProject: (state, payload) => {
      state.projects = [...state.projects, payload.payload];
    },
  },
});

export const {
  setProjectCellColors,
  setIncreaseSaveValue,
  setProjects,
  addProject,
} = projectSlice.actions;
export default projectSlice.reducer;
