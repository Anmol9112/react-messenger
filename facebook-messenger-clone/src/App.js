import React, { useState, useEffect } from "react";
import { Button,FormControl,InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import Logo from './logo.png';



function App() {
  const [input, setInput]= useState('');
  const [messages, setMessages]=useState([]);
  const [username, setUsername]=useState('');

  //useState= variable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
  // this code runs ONCE when the app component loads
  db.collection('messages')
  .orderBy('timestamp', 'desc')
  .onSnapshot(snapshot => {
     setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data(),
     }))
     );
  });
  }, [] );

  useEffect(() => {
   // if its blank inside [], this code runs ONCE when the app component loads
   setUsername(prompt('Please enter your name'))
  }, [] ); // condition

  const sendMessage = (event) => {
  // all the logic to send message goes here
  event.preventDefault();

  db.collection('messages').add({
  message: input,
  username: username,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  setInput('');
  };
  return (
    <div className="App">
      <img src={Logo} className="logo"  width="100px" height="100px" alt="messenger_logo"></img>
      <h1>React-Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
     <FormControl className="app__formControl">
      <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
      <IconButton className ="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
      <SendIcon/>
      </IconButton>
      </FormControl>
      </form>
    <FlipMove>
      {
        messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
    </FlipMove>
    </div>
  );
}

export default App;
