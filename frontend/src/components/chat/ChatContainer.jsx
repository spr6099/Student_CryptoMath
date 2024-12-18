import React, { useContext, useEffect, useState } from "react";
import "../../style/chat.css";
import { BaseUrl } from "../../constant";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChatContainer() {
  const { chatId} = useParams();
  const { user } = useContext(AuthContext);
  const [chats, setchats] = useState([]);
  const [message, setmessage] = useState("");

  const Getmessage = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/chat/get_messages/${chatId}`);
      setchats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      chatId, senderId:user._id, text:message
    };
    try {
      const res = await axios.post(`${BaseUrl}/chat/new_message`, data);
      setmessage("");
      Getmessage()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getmessage();
  }, [chatId,user]);

  return (
    <div className="chat_body">
      <section className="chat_container">
        {chats.map((item) => (
          <React.Fragment key={item._id}>
            {item.senderId === user._id ? (
              <MyMessage image={user?.image} message={item.text} />
            ) : (
              <OtherMessage image={""} message={item.text} />
            )}
          </React.Fragment>
        ))}
      </section>
      <section className="chat_form_container">
        <form onSubmit={HandleSubmit}>
          <div className="chat_form">
            <input
              className="chat_input"
              type="text"
              name="message"
              value={message}
              placeholder="Enter your messages"
              onChange={(e) => setmessage(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
              send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function MyMessage({ image, message }) {
  return (
    <div className="my_message">
      <p>{message}</p>
      <img src={`${BaseUrl}/uploads/${image}`} alt="" className="message_profile" />
    </div>
  );
}
function OtherMessage({ image, message }) {
  return (
    <div className="other_message">
      <img src={image} alt="" className="message_profile" />
      <p>{message}</p>
    </div>
  );
}

export default ChatContainer;
