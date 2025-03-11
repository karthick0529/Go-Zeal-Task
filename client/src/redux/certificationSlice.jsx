import { createSlice } from "@reduxjs/toolkit";

// Load initial state from sessionStorage
const loadState = () => {
  const storedState = sessionStorage.getItem("certifications");
  return storedState ? JSON.parse(storedState) : [];
};

const initialState = loadState(); // Initialize state with saved data

const certificationSlice = createSlice({
  name: "certification",
  initialState,
  reducers: {
    saveCertification: (state, action) => {
      state.push(action.payload); // Append new certification

      // Save updated state to sessionStorage
      sessionStorage.setItem("certifications", JSON.stringify(state));
    },
  },
});

export const { saveCertification } = certificationSlice.actions;
export default certificationSlice.reducer;

