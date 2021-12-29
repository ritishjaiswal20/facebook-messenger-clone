import React,{useState,useEffect} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { FormControl,InputLabel,Input } from '@mui/material';
import Message from './Message';
function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState(['hi','hello']);
  const [username,setUsername]=useState('');
  console.log(input);
  console.log(messages);
  useEffect(()=>{
    setUsername(prompt('please enter useranme'));
  },[])
  const sendMessage=(event)=>{
      event.preventDefault();
      setMessages([...messages,input]);
      setInput('');
  }
  return (
    <div className="App">
      <h1> hello programers </h1>
      <h1>welcome {username}</h1>
      <form>
        <FormControl>
           <InputLabel>enter a message</InputLabel>
           <Input value={input} onChange={event=> setInput(event.target.value)}></Input>
           <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>send messages</Button>
        </FormControl>
       </form>
      {
        messages.map(messages=>( 
          <Message text={messages}/>
          ))
      }
    </div>
  );
}
export default App;   
