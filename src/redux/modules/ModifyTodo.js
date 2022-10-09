import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [
    {
      id: 1,
      title: "강아지 산책하기",
      body: "립쇼농이랑 산책가기",
      isDone: false,
    },
    { id: 2, title: "리액트 공부하기", body: "리덕스 공부하기", isDone: false },
  ],
};

export const getTodos = createAsyncThunk("getTodo", async (thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/posts");
    return thunkAPI.fulfillWithValue(data.data); //dispatch 리듀서랑
  } catch (err) {
    return thunkAPI.rejectWithValue(err); ///리듀서와 우리의 중간다리
  }
});

export const addTodos = createAsyncThunk(
  "AddTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/posts", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const delTodos = createAsyncThunk(
  "delTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://localhost:3001/posts/${payload.id}`
      );
      return thunkAPI.fulfillWithValue(payload.id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const toggleTodos = createAsyncThunk(
  "updateTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        `http://localhost:3001/posts/${payload.id}`,
        payload.id
      );
      return thunkAPI.fulfillWithValue(payload.id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const ModifyTodo = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // getTodos : (state, action)=> {
    //   state.list = [...state]
    // },
    // addTodos : (state, action) => {
    //   state.list = [...state, action.payload]
    // }
  },
  extraReducers: {
    //get
    [getTodos.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      state.list = action.payload;
    },

    //post
    [addTodos.fulfilled]: (state, action) => {
      state.list = [...state, action.payload];
    },
    [addTodos.rejected]: (state, action) => {
      state.list = [...state, action.payload];
    },

    //delete
    [addTodos.fulfilled]: (state, action) => {
      state.filter((todo) => todo.id !== action.payload);
    },
    [addTodos.rejected]: (state, action) => {
      state.filter((todo) => todo.id !== action.payload);
    },

    //put
    [addTodos.fulfilled]: (state, action) => {
      state.list.map((todo) => ({
        ...todo,
        isDone: todo.id === action.payload.id ? !todo.isDone : todo.isDone,
      }));
    },
    [addTodos.rejected]: (state, action) => {
      state.list.map((todo) => ({
        ...todo,
        isDone: todo.id === action.payload.id ? !todo.isDone : todo.isDone,
      }));
    },
  },
});

export const todosActions = ModifyTodo.actions;
export default ModifyTodo;
