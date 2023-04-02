import React, { useEffect, useState } from "react";
import { showWriteMessage } from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { selectContact } from "../store/slices/ChatSlice";
const ListElement = ({ item, setSelectedConversation, position }) => {

  //react rtk
  const dispatch = useDispatch();

  const selectAContact = (payload)=>{
    console.log("Payload: ", payload);
    dispatch(selectContact(payload));
  }

  const {items} = useSelector((state)=>{
    return state.chat;
  })

  // console.log("Data from chat: " ,data);

  ///
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


  var [date, setDate] = useState(new Date());
  // handles current contact
  const [contact, setContact] = useState("Select contact");
  //console.log({ item });
  return (
    <div>
      <button
        className={
          screenSize.dynamicWidth > 900
            ? "contact-button"
            : "contact-button-max"
        }
        onClick={() => {
          selectAContact(item);
          // setContact(sender);
          setDate(new Date());
          //setSelectedConversation(item);
          //showWriteMessage();
        }}
      >
        <li id="firstcontact" className="list-group-item cname">
          {item?.name}
        </li>
        <li className="list-group-item">{item?.lastMessage}</li>
        <li className="list-group-item md">{item?.lastMessageTime}</li>
      </button>
    </div>
  );
};

export default ListElement;
