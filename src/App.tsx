
import { useState } from "react";
import Codedisplay from "./Components/Codedisplay";
import Messagesdisplay from "./Components/Messagesdisplay";
import e from "cors";

interface ChatData{
  role: string,
  content: string
}



const App = () => {
const[value,setValue]= useState<string>("")
const[chat, setChat]= useState<ChatData[]>([])


  const getQuery= async() => {
    try{
      const options ={
        method:"POST", 

        headers:{
         "Content-Type": "application/jason"
        }
        ,
        body: JSON.stringify({
          message: value
        })
      }

    const response = await fetch("http://localhost:8000/completions", options)

    const data = await response.json()
    console.log(data)
    const userMessage={
      role:"user",
      content: value
    }
    setChat(oldChat => [...oldChat,data])
    }
    catch(error){
      console.error(error)
    }
  }

const clearchat = () => {
  setValue("")
  setChat([])
}



const filteredUserMessages= chat.filter(message => message.role ==="user")
const latestcode= chat.filter(message => message.role === "assistant").pop()


  return (
    <div className="app">
      <Messagesdisplay userMessages={filteredUserMessages}/>
      <input value={value} onChange={e => setValue(e.target.value)}/>
      <Codedisplay text={latestcode?.content || ""}/>
      <div className="button-box">
        <button id="get-query" onClick={getQuery}>Get Query!</button>
        <button id="clear-chat" onClick={clearchat}>Clear chat!</button>
      </div>
    </div>
  );
}

export default App
