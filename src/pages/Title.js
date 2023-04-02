import "./Title.css";
import React from "react";
import { useSelector } from "react-redux";

const Title = () => {

  //const dispatch = useDispatch();

  const contact= useSelector((state)=>{
    return state.chat.selectedContact;
  })

  //console.log("User: ", contact);

  return (
    <div className="name">
      <h2>{contact?.name}</h2>
    </div>
  );
};

export default Title;
