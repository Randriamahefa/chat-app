import {  useEffect, useState } from "react";
import socketIOClient from "socket.io-client"
import UserLogin from "./UserLogin";
import ChatBoxReceiver, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";

const style={
    darkMode:{
      backgroundColor:"#12060a",
      color:"#fff",
      height:"100%",
      minHeight:"100vh",
      margin:0,
      padding:0
    },
    lightMode:{
      backgroundColor:"#ccc",
      color:"#000",
      height:"100%",
      minHeight:"100vh",
      margin:0,
      padding:0
    }
  }

const ChatContainer = () => {

    let socketio = socketIOClient("http://localhost:5001")
    const [darkMode, setDarkMode] = useState(true)
    const [chats , setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem("user"))
    const [avatar, setAvatar] = useState(localStorage.getItem("avatar"))
  
    const ChangeMode = () => {
        setDarkMode(prevMode => {return !prevMode} )
    }

    useEffect(()=> {
        socketio.on('chat', senderChats => {
            setChats(senderChats)
        })
    })

    function sendChatToSocket(chat) {
        socketio.emit("chat" , chat)
        
    }

    const addNewMessage = (chat) =>{
    const newChat = {...chat, user,avatar}
    setChats([...chats,newChat])
    sendChatToSocket([...chats , newChat])

    }
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("avatar")
        setUser("")
        setAvatar("")
    }
    const ChatsList = () => {
        return chats.map((chat, index) => {
            if(chat.user === user) return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
                return <ChatBoxReceiver key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
            
        })
    }

    return (
        <div style={darkMode? style.darkMode: style.lightMode} >
            {
                (user && avatar )? 
                    <div>
                        <div style={{display: 'flex', flexDirection:"row", justifyContent:"space-between"}}>
                            <button
                                onClick={ChangeMode}
                            >
                                Changer le thême
                            </button>
                            <h1>Groupe messenger : <strong style={{fontSize:"1em",color: "#fff", textShadow: "3px 3px 5px rgb(255, 0, 0)" }} >{user}</strong> </h1>
                            <button
                                onClick={() => logout()}
                            > 
                                Se déconnecter
                            </button>
                        </div>
                        <ChatsList />
                        <InputText addNewMessage={addNewMessage} />
                    </div>
                : 
                    <UserLogin addUserName={setUser} addUserAvatar={setAvatar} />
            }
        </div>        

    )
}

export default ChatContainer