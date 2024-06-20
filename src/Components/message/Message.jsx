// import React, { useState, useEffect } from "react";
// import "./message.css";
// import Messages from '../../assets/messages.svg'
// import Navbar2 from "../navbar/Navbar2";
// import { FaRegSmile } from "react-icons/fa";
// // import { PiPaperPlaneRightFill } from "react-icons/pi";
// import { PiPaperPlaneRightBold } from "react-icons/pi";
// import { FaPaperclip } from "react-icons/fa6";
// function Message() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [file, setFile] = useState(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   useEffect(() => {
//     // Load messages from local storage when the app loads
//     const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
//     setMessages(storedMessages);
//   }, []);

//   const handleSend = () => {
//     if (input.trim() || file) {
//       const newMessage = {
//         text: input,
//         file: file ? URL.createObjectURL(file) : null,
//         timestamp: new Date().toLocaleString(),
//         sender: "You", // Add sender property for background color logic
//       };
//       const updatedMessages = [...messages, newMessage];
//       setMessages(updatedMessages);
//       setInput("");
//       setFile(null);
//       // Save updated messages to local storage
//       localStorage.setItem("messages", JSON.stringify(updatedMessages));

//       // Auto-chat bot response for specific messages
//       const responses = {
//         hi: "Hi! Thanks for contacting us. Please enter your message.",
//         "how are you": "I'm fine, thank you! How can I assist you today?",
//         "what is your name": "I'm Auto-Chat Bot, your virtual assistant.",
//         bye: "Goodbye! Have a great day!",
//         "what can you do":
//           "I can assist you with your inquiries and provide information.",
//         thanks: "You're welcome!",
//         "help me": "Sure, please tell me what you need help with.",
//         "tell me a joke":
//           "Why don’t scientists trust atoms? Because they make up everything!",
//       };

//       const lowerCaseInput = input.trim().toLowerCase();
//       if (responses[lowerCaseInput]) {
//         setTimeout(() => {
//           const autoResponse = {
//             text: responses[lowerCaseInput],
//             timestamp: new Date().toLocaleString(),
//             sender: "Auto-Chat Bot",
//           };
//           const updatedMessagesWithAutoResponse = [
//             ...updatedMessages,
//             autoResponse,
//           ];
//           setMessages(updatedMessagesWithAutoResponse);
//           localStorage.setItem(
//             "messages",
//             JSON.stringify(updatedMessagesWithAutoResponse)
//           );
//         }, 1000); // Delay for auto-response to simulate typing
//       }
//     }
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]); // Store the first selected file
//   };

//   const handleEmojiClick = (emoji) => {
//     setInput(input + emoji);
//   };

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100">
//         <div>
//           <img src={Messages} className="md:h-[550px] md:w-[550px]"/>
//         </div>

//       <div className="chat-container mt-20">
//         <div className="chat-header">
//           <h1 className="chat-title">Chat With Us!</h1>
//         </div>
//         <div className="chat-messages">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`chat-message ${
//                 message.sender === "You" ? "sent" : "received"
//               }`}
//             >
//               <div className="message-content">
//                 {message.text && <p>{message.text}</p>}
//                 {message.file && (
//                   <img src={message.file} alt="attached" width="100" />
//                 )}
//               </div>
//               <div className="message-timestamp">{message.timestamp}</div>
//             </div>
//           ))}
//         </div>
//         <div className="chat-input">
//           <button
//             className="emoji-button"
//             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//           >
//             <FaRegSmile />
//           </button>
//           {showEmojiPicker && (
//             <div className="emoji-picker">
//               {["😊", "❤️", "😂", "😍", "😎", "👍", "👋", "🙏", "🎉"].map(
//                 (emoji, index) => (
//                   <span key={index} onClick={() => handleEmojiClick(emoji)}>
//                     {emoji}
//                   </span>
//                 )
//               )}
//             </div>
//           )}
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <label htmlFor="file-upload" className="file-upload-label">
//             <input
//               type="file"
//               id="file-upload"
//               onChange={handleFileChange}
//               style={{ display: "none" }}
//             />
//           </label>
//           <FaPaperclip />
//           <button className="send-button" onClick={handleSend}>
//             <PiPaperPlaneRightBold />
//           </button>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

// export default Message;


import React, { useState, useEffect } from "react";
import "./message.css";
import Messages from "../../assets/messages.svg";
import Navbar2 from "../navbar/Navbar2";
import { FaRegSmile } from "react-icons/fa";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { FaPaperclip } from "react-icons/fa6";

function Message() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    // Load messages from local storage when the app loads
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleSend = () => {
    if (input.trim() || file) {
      const newMessage = {
        text: input,
        file: file ? URL.createObjectURL(file) : null,
        timestamp: new Date().toLocaleString(),
        sender: "You", // Add sender property for background color logic
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInput("");
      setFile(null);
      // Save updated messages to local storage
      localStorage.setItem("messages", JSON.stringify(updatedMessages));

      // Auto-chat bot response for specific messages
      const responses = {
        hi: "Hi! Thanks for contacting us. Please enter your message.",
        "how are you": "I'm fine, thank you! How can I assist you today?",
        "what is your name": "I'm Auto-Chat Bot, your virtual assistant.",
        bye: "Goodbye! Have a great day!",
        "what can you do":
          "I can assist you with your inquiries and provide information.",
        thanks: "You're welcome!",
        "help me": "Sure, please tell me what you need help with.",
        "tell me a joke":
          "Why don’t scientists trust atoms? Because they make up everything!",
      };

      const lowerCaseInput = input.trim().toLowerCase();
      if (responses[lowerCaseInput]) {
        setTimeout(() => {
          const autoResponse = {
            text: responses[lowerCaseInput],
            timestamp: new Date().toLocaleString(),
            sender: "Auto-Chat Bot",
          };
          const updatedMessagesWithAutoResponse = [
            ...updatedMessages,
            autoResponse,
          ];
          setMessages(updatedMessagesWithAutoResponse);
          localStorage.setItem(
            "messages",
            JSON.stringify(updatedMessagesWithAutoResponse)
          );
        }, 1000); // Delay for auto-response to simulate typing
      }
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Store the first selected file
  };

  const handleEmojiClick = (emoji) => {
    setInput(input + emoji);
  };

  return (
    <>
      <Navbar2 />

      <div className="flex md:lg:xl:2x:mt-0 mt-16 md:mt-0 flex-col items-center justify-center bg-gray-100 md:flex-row">

        <div>
          <img src={Messages} className="h-64 w-64 md:h-[550px] md:w-[550px]" />
        </div>

        <div className="chat-container   mt-10 md:mt-20 p-4  max-w-md md:max-w-lg">
          <div className="chat-header bg-[#075e54] pt-4">
            <h1 className="chat-title text-xl font-semibold mb-4 text-white">
              Chat With Us!
            </h1>
          </div>
          <div className="chat-messages overflow-y-auto h-64 md:h-96 bg-[#efeae2] p-4 rounded shadow">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === "You" ? "sent" : "received"
                } mb-2`}
              >
                <div className="message-content p-2 rounded bg-white">
                  {message.text && <p>{message.text}</p>}
                  {message.file && (
                    <img
                      src={message.file}
                      alt="attached"
                      className="mt-2 w-24 h-24 object-cover"
                    />
                  )}
                </div>
                <div className="message-timestamp text-xs text-gray-500 mt-1">
                  {message.timestamp}
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input mt-4 flex items-center space-x-2">
            <button
              className="emoji-button text-xl"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <FaRegSmile />
            </button>
            {showEmojiPicker && (
              <div className="emoji-picker absolute bg-transparent shadow p-2 rounded">
                {["😊", "❤️", "😂", "😍", "😎", "👍", "👋", "🙏", "🎉"].map(
                  (emoji, index) => (
                    <span
                      key={index}
                      onClick={() => handleEmojiClick(emoji)}
                      className="cursor-pointer"
                    >
                      {emoji}
                    </span>
                  )
                )}
              </div>
            )}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <label
              htmlFor="file-upload"
              className="file-upload-label cursor-pointer text-xl"
            >
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
              />
              <FaPaperclip />
            </label>
            <button
              className="send-button text-xl text-blue-500"
              onClick={handleSend}
            >
              <PiPaperPlaneRightBold />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;