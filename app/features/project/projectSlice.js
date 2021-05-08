import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    save: 0,
    projects: [
      {
        pname: "test",
        psize: [32, 32],
        pdate: "10/10/1998",
        cellColors: {
          14: "orange",
          15: "white",
          16: "white",
          17: "white",
          23: "white",
          27: "white",
          28: "orange",
          38: "white",
          39: "white",
          49: "white",
          410: "white",
          510: "white",
          610: "white",
          611: "white",
          711: "white",
          811: "white",
          11: "white",
          713: "orange",
        },
      },
      {
        pname: "deneme",
        psize: [16, 16],
        pdate: "18/08/1998",
        cellColors: {
          14: "white",
          15: "white",
          16: "green",
          17: "orange",
          23: "white",
          27: "white",
          28: "white",
          610: "white",
          611: "white",
          711: "white",
          811: "white",
          11: "white",
          713: "orange",
        },
      },
    ],
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
      state.projects = payload.projects;
    },
  },
});

export const {
  setProjectCellColors,
  setIncreaseSaveValue,
  setProjects,
} = projectSlice.actions;
export default projectSlice.reducer;
