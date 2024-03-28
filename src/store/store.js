import { configureStore, createSlice } from "@reduxjs/toolkit";
const TaskSlice = createSlice({
  name: "task",
  initialState: { tasks: [] },
  reducers: {
    createTask: (state, actions) => {
      state.tasks.push(actions.payload);
    },
  },
});

const store = configureStore({
  reducer: { task: TaskSlice.reducer },
});

export const { createTask } = TaskSlice.actions;
export default store;
