import { configureStore, createSlice } from "@reduxjs/toolkit";
import { WeatherApi } from "./services/weather";

const TaskSlice = createSlice({
  name: "Tasks",
  initialState: {
    AllTasks: [],
    ShowCompletedTasks: true,
    ShowIncompletedTasks: true,
    Counter: 0,
  },
  reducers: {
    //Task Reducers
    Add_a_Task: (state, action) => {
      state.AllTasks.push(action.payload);
    },
    Delete_a_Task: (state, action) => {
      if (state.AllTasks[action.payload].ischeck) {
        state.Counter--;
      }

      state.AllTasks.splice(action.payload, 1);
    },
    Toogle_Ischeck: (state, action) => {
      state.AllTasks[action.payload].ischeck =
        !state.AllTasks[action.payload].ischeck;
    },
    Set_Position: (state, action) => {
      state.AllTasks[action.payload[0]].top = action.payload[1];
      state.AllTasks[action.payload[0]].left = action.payload[2];
    },

    //Filter Reducers
    Toogle_Filters: (state, action) => {
      switch (action.payload) {
        case "CT":
          state.ShowCompletedTasks = !state.ShowCompletedTasks;
          break;
        case "ICT":
          state.ShowIncompletedTasks = !state.ShowIncompletedTasks;
          break;
        default:
          break;
      }
    },

    //Counter Reducers
    Counter_Maths: (state, action) => {
      switch (action.payload) {
        case "add":
          state.Counter++;
          break;
        case "sub":
          state.Counter--;
          break;
        default:
          break;
      }
    },
  },
});

export const {
  Add_a_Task,
  Delete_a_Task,
  Toogle_Ischeck,
  Set_Position,
  Toogle_Filters,
  Counter_Maths,
} = TaskSlice.actions;

const store = configureStore({
  reducer: {
    tasks: TaskSlice.reducer,
    //API Call
    [WeatherApi.reducerPath]: WeatherApi.reducer,
  },
  //API middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(WeatherApi.middleware),
});

export default store;
