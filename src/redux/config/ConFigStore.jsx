import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/ModifyTodo";

const store = configureStore({
  reducer: {
   todos: todos.reducer
  },
});

export default store;
