import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Message.css";
import { Route, Routes } from "react-router-dom";
import Messages from "./Messages";
import ListElement from "./ListElement";
import { fakeUserData } from "../api";
import axios from "axios";
import store from "../store";
import { useDispatch, useSelector } from "react-redux";
import { selectContact } from "../store/slices/ChatSlice";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Chat = () => {


  //redux toolkit
  const dispatch = useDispatch();

  const items = useSelector((state)=>{
    return state.chat.listItems;
  })

  //console.log("Items: " ,items);
  //console.log("Data from chat: ", data);
  //handling screen sizes
  const [myData, setmyData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => setmyData(response.data));
  }, []);

  //const screenSize =dynamicWidthindow.innerWidth, window.innerHeight]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  //console.log(screenSize);
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    setDimension();
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, []);
  // Conversation Management
  const [selectedConversation, setSelectedConversation] = useState();
  const [listItems, setListItems] = useState([
    {
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
    },
  ]);
  // console.log({ listItems });
  // console.log({ selectedConversation });

  let cont = false;

  const [contactSide, setContactSide] = useState(<p>No contact selected</p>
    // <ul className="contacts" id="contacts">
    //       {listItems.map((elem, index) => (
    //         <ListElement
    //           key={index}
    //           position={index}
    //           item={elem}
    //           setSelectedConversation={setSelectedConversation}
    //         />
    //       ))}
    //     </ul>
  );


  useEffect(() => {
    //console.log(screenSize);
    if (!items?.selectedContact && screenSize.dynamicWidth > 900) {
      setContactSide(
        <ul className="contacts" id="contacts">

          {items?.map((elem,index) => (
            <ListElement
              key={index}
              //position={index}
              item={elem}
              //setSelectedConversation={setSelectedConversation}
            />
          ))}
        </ul>
      );
      cont = false;
    } else if (items?.selectedContact && screenSize.dynamicWidth > 900) {
      setContactSide(
        <ul className="contacts" id="contacts">
          
          {items?.map((elem,index) => (
            <ListElement
              key={index}
              //position={index}
              item={elem}
              //setSelectedConversation={setSelectedConversation}
            />
          ))}
        </ul>
      );
      cont = false;
    } else if (!selectedConversation && screenSize.dynamicWidth < 900) {
      setContactSide(
        <ul className="contacts-max" id="contacts">
          
          {items?.map((elem,index) => (
            <ListElement
              key={index}
              //position={index}
              item={elem}
              //setSelectedConversation={setSelectedConversation}
            />
          ))}
        </ul>
      );
      cont = false;
    } else if (selectedConversation && screenSize.dynamicWidth < 500) {
      contactSide = null;
    }
  }, [screenSize]);


  return (
    <div className="msgWindow">
      <div className="box">
        {contactSide}
        <Messages
          // cont={selectedConversation}
          // selectedConversation={selectedConversation}
          // setSelectedConversation={setSelectedConversation}
          // listItems={listItems}
          // setListItems={setListItems}
        />
      </div>
    </div>
  );
};

export default Chat;
