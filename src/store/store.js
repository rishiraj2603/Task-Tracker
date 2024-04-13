import { configureStore, createSlice } from "@reduxjs/toolkit";
export const TASKSTATUS = {
  PENDING: "pending",
  INPROGRESS: "inProgress",
  COMPELETE: "compelete",
  DEPLOYED: "deployed",
  DEFFERED: "deffered",
  DESTROY: "destroy",
};
const TaskSlice = createSlice({
  name: "task",
  initialState: { tasks: [] },
  reducers: {
    createTask: (state, action) => {
      const taskId = makeid(5);
      state.tasks.push({
        ...action.payload,
        taskId,
        status: TASKSTATUS.PENDING,
      });
    },
    updateTask: (state, action) => {
      const taskIndex = state.tasks.findIndex((item) => {
        return item.taskId === action.payload.taskId;
      });
      state.tasks[taskIndex] = action.payload;
    },
    changeStatus: (state, action) => {
      const { taskId, nextStatus } = action.payload;
      const taskIndex = state.tasks.findIndex((item) => {
        return item.taskId === taskId;
      });
      state.tasks[taskIndex].status = nextStatus;
    },
  },
});

const store = configureStore({
  reducer: { task: TaskSlice.reducer },
});

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
export const { createTask, updateTask, changeStatus } = TaskSlice.actions;
export default store;
