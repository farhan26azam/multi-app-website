import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./slices/ChatSlice";
const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});

//console.log(chatSlice.actions);
export default store;
