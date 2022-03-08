import { useEffect, useState } from "react";
import { io } from 'socket.io-client'

import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'

let socket;

function Chat({ location }) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')

    // const ENDPOINT = 'http://localhost:5000'
    // const queryParams = new URLSearchParams(window.location.search)

    // useEffect(() => {
    //     const name = queryParams.get('name')
    //     const room = queryParams.get('room')

    //     try {
    //         socket = io(ENDPOINT)
    //     } catch (error) {
    //         console.log('Tidak bisa akses')
    //     }
        
    //     setName(name)
    //     setRoom(room)

    //     socket.emit('join', { name, room }, () => {
            
    //     })

    //     return () => {
    //         socket.emit('disconnect')

    //         socket.off()
    //     }
        
    // }, [])

    // useEffect(() => {
    //     socket.on('message', (message) => {
    //         setMessages([...messages, message])
    //     })

    // }, [messages])

    const sendMessage = e => {
        e.preventDefault()

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

  return (
      <>
      <div className="container center">
          <div className="chatContainer">
              <InfoBar room={room} />
              <Messages />
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
      </div>
      </>
  );
}

export default Chat;
