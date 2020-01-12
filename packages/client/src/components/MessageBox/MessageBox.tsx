import React, {useState} from "react";
import { gql } from "apollo-boost";
import { useMutation } from '@apollo/react-hooks';
const SEND_MESSAGE = gql`
  mutation messages($type: String!) {
    sendMsg(type: $type) {
        name
        img
        userId
        msg
    }
  }
`;
const Messagebox = () => {
    //const [sendMsg, { data }] = useMutation(SEND_MESSAGE);
    const [message, setMessage] = useState('');
    const sendHandler=()=>{
        alert(`message send ${message}`)
         setMessage('')

    }
  return (
    <div className="messagebox">
       <div className="box-section">
       <textarea className="box" rows={5} value={message} onChange={e => setMessage(e.target.value)}></textarea>
           <button className="send-btn" onClick={sendHandler}>Send</button>
       </div>

    </div>
  );
};

export default Messagebox;