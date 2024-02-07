import { useEffect, useState } from "react";
import {
  databases,
  DATABASE_ID,
  COLLECTION_ID_MESSAGES,
} from "../appwriteConfig";

function Room() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES
    );
    console.log("RESOINSE:", response);
    setMessages(response.documents)
  };

  return (
  <main>
    <div>
      {messages.map(message => (
        <div key={message.$id}>
          <div>
            <span>{message.body}</span>
          </div>
        </div>
      ))}
    </div>
  </main>
  )
}

export default Room;
