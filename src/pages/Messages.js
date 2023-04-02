import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGlobalMessage, addMessage, selectContact } from "../store/slices/ChatSlice";
import Title from "./Title";


function Messages() {
  //dispatch
  const dispatch = useDispatch();

  const sendMessage = (payload)=>{
    //console.log("Payload message: ", payload);
    dispatch(addMessage(payload));
    //dispatch(selectContact(payload));
  }

  const sendGlobalMessage = (payload)=>{
    //console.log("Payload message: ", payload);
    dispatch(addGlobalMessage(payload));
    console.log("Messages : " ,contact?.messages);
    //dispatch(selectContact(payload));
  }

  const setContact = (payload)=>{
    dispatch(selectContact(payload));
    //dispatch(selectContact(payload));
  }

  const contact = useSelector((state)=>{
    return state?.chat?.selectedContact;
  })
  //console.log("Contact: " , contact);

  // const messageContent = useSelector((state)=>{
  //   return state?.chat?.listItems;
  // })

  //console.log("Messages: ", messageContent[0]);


  // changing date
  const date = new Date();
  useEffect(() => {}, [date]);
  const [buttonValue, setButtonValue] = useState("");
  const handleChange = (e) => {
    setButtonValue(e.target.buttonValue);
  };
  const handleSubmit = (e) => {
    //setMessageFloat();
    // setMessageFloat();
    e.preventDefault();
    // or you can send data to backend
    addToList();
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  //set message value
  const [value, setValue] = useState("");
  // add messge  to the messages list
  const addToList = () => {
    // update local messages array
    sendMessage({
      id: 0,
      isRespond: false,
      content: value,
      time: embedTime(new Date())
    })
    //addMessage();


    // set global messages array
    sendGlobalMessage(
      {
        id: 0,
        isRespond: false,
        content: value,
        time: embedTime(new Date())
      }
    );
    //addGlobalMessage()
    
    // props.setSelectedConversation((prev) => ({
    //   ...prev,
    //   messages: [
    //     ...prev.messages,
    //     {
    //       id: 0,
    //       isRespond: false,
    //       content: value,
    //       time: embedTime(new Date()),
    //     },
    //   ],
    //   lastMessage: value,
    //   lastMessageTime: embedTime(new Date()),
    // }));

    // set global messages array
    // props.setListItems((prev) =>
    //   prev?.map((elem) => {
    //     if (elem?.name === props.selectedConversation?.name) {
    //       return {
    //         ...elem,
    //         messages: [
    //           ...elem?.messages,
    //           {
    //             id: 0,
    //             isRespond: false,
    //             content: value,
    //             time: embedTime(new Date()),
    //           },
    //         ],
    //         lastMessage: value,
    //         lastMessageTime: embedTime(new Date()),
    //       };
    //     } else return elem;
    //   })
    // );

    // set global last message

    setValue("");
  };

  function embedTime(date) {
    const static_time = date.toLocaleTimeString();
    return static_time;
  }

  function handleBack() {
    setContact(null);
    //selectContact(null);
    //props?.setSelectedConversation(null);
  }

  function setMessageFloat(idParam) {
    var messageBox = document.getElementById("message");
    var dateBox = document.getElementById("date");
    var idBox = document.getElementById("itemId");

    if (idParam > 0) {
      messageBox.style.textAlign = "left";
      dateBox.style.textAlign = "left";
      idBox.style.textAlign = "left";
    } else {
      messageBox.style.textAlign = "right";
      dateBox.style.textAlign = "right";
      idBox.style.textAlign = "right";
    }
  }
  // show bottom bar
  // handles current contact

  let completeContent;

  let viewBox;
  //(props?.selectedConversation)
  if (contact) {
    viewBox = (
      <div id="bottom" className="bottom">
        <input
          className="message-type"
          type="submit text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addToList();
            }
          }}
        />
        <button className="send-button" onClick={handleSubmit}>
          Send
        </button>
      </div>
    );
  }

  let titleBox;
  //titleBox = <Title selectedConversation={props.selectedConversation} />;
  titleBox = <Title />;
  // if (props?.selectedConversation) {
  //   titleBox = <Title selectedConversation={props.selectedConversation} />;
  // } else {
  //   titleBox = <h2 className="name_title">No contact selected</h2>;
  // }

  let backButton;
  //(props?.selectedConversation)
  if (contact) {
    backButton = (
      <button onClick={handleBack} className="back-button">
        {"Back"}
      </button>
    );
  }


//props?.cont ?
  return  (
    <div id="message" className="message">
      {backButton}
      {titleBox}
      <ul className="messages">
        <div className="startChat"></div>
        {contact?.messages?.length > 0 && contact?.messages?.map((item, index)=>(
          <li
          className={item.isRespond ? "isRespond" : "isNotRespond"}
          key={index}
        >
          <p>{item.content}</p>
          <p className="date">{item.time}</p>
        </li>
        ))}

        {/* {props?.selectedConversation?.messages?.length > 0 &&
          props?.selectedConversation?.messages.map((item, index) => (
            <li
              className={item.isRespond ? "isRespond" : "isNotRespond"}
              key={index}
            >
              <p>{item.content}</p>
              <p className="date">{item.time}</p>
            </li>
          ))} */}

          {/* {<p date>{data.chat.messages}</p>} */}
        {/* {data.messages.map((item, index)=>(<li className={item.isRespond ? "isRespond" : "isNotRespond"}
        key = {index}>
          <p>
            {item.content}
          </p>
          <p className="date">
            {item.time}
          </p>
        </li>
        ))} */}

      </ul>
      {viewBox}
    </div>
   ) 
  //: (
  //   <p></p>
  // );
}

export function showWriteMessage() {
  // var bottomBar = document.getElementById("bottom");
  // bottomBar.style.visibility = "unset";
}

export default Messages;
