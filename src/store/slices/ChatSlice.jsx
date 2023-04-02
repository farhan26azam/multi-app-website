import {createSlice} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    selectedContact: {},
    index: 0,
    listItems: [{
        name: "Frank",
        lastMessage: "Hey What's up?",
        lastMessageTime: "12:12:12 PM",
        messages: [
          {
            id: 1,
            isRespond: true,
            content: "Hello",
            time: "10:10:10 PM",
          },
          {
            id: 1,
            isRespond: true,
            content: "Hey What's up?",
            time: "12:12:12 PM",
          },
        ],
      },
      {
        name: "James",
        lastMessage: "Hello I am James",
        lastMessageTime: "6:16:16 AM",
        messages: [
          {
            id: 2,
            isRespond: true,
            content: "Hello I am James",
            time: "6:16:16 AM",
          },
        ],
      },
      {
        name: "Jess",
        lastMessage: "I am Jess",
        lastMessageTime: "5:14:14 AM",
        messages: [
          {
            id: 3,
            isRespond: true,
            content: "I am Jess",
            time: "5:14:14 AM",
          },
        ],
      },]
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers:{
        selectContact(state, action){
            state.selectedContact =action.payload;
        },
        addMessage(state, action){
          state.selectedContact.messages.push(action.payload);
          state.selectedContact.lastMessage= action.payload.content;
          state.selectedContact.lastMessageTime= action.payload.time;
        },
        addGlobalMessage(state, action){
          console.log("Selected contact name: " ,state?.selectedContact?.name);
          state?.listItems.forEach(element => {
            if(element?.name === state?.selectedContact?.name){
              element?.messages?.push(action?.payload);
              //element?.lastMessage = action?.payload?.content;
              //element?.lastMessageTime = action?.payload?.time;
            }
          });



          // state.listItems =  (
          //   // state?.listItems?.map((prev)=>
          // state?.listItems?.map((elem)=>{
          //   console.log(elem?.name);
          //   if (elem?.name === state?.selectedContact?.name){
          //     console.log("Matched : Adding ", action.payload ," to ", elem?.messages);

          //     return {
          //       ...elem,
          //       messages:[
          //         ...elem?.messages,
          //         action.payload
          //       ],
          //       lastMessage: action?.payload?.content,
          //       lastMessageTime: action?.payload?.time
          //     }
          //   }else{
          //     return elem;
          //   }
          // })


          // )


          // state?.listItems?.map((elem)=>{
          //   if(action?.payload?.name === state?.selectedContact?.name){
          //     return {
          //       ...elem,
          //       messages:[
          //         ...elem?.messages,
          //         action.payload
          //       ],
          //       lastMessage: action.payload.content,
          //       lastMessageTime: action.payload.time
          //     }
          //   }else{
          //     return null;
          //   }
          // })
          //)
        }
    }
})



export default chatSlice.reducer;
export const { selectContact } = chatSlice.actions;
export const { addMessage } = chatSlice.actions;
export const { addGlobalMessage } = chatSlice.actions;
