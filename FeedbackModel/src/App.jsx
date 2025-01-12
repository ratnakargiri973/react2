import React, { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const options = [
    {
      id:1,
      emoji: "😃",
      name: "Happy"
    },
    {
      id:2,
      emoji: "😁",
      name: "Very Happy"
    },
    {
      id:3,
      emoji: "😄",
      name: "Excited"
    },
    {
      id:4,
      emoji: "😊",
      name: "Satisfied"
    },
    {
      id:5,
      emoji: "🤩",
      name: "Delighted"
    },
    {
      id:6,
      emoji: "🥰",
      name: "Loved"
    },
  ]


  function handleModel(){
    setStep(step+1);
  }

  function handleSubmit(){
      setStep(step+1);
  }
  function handleCancel(){
    setStep(1);
  }

  return (
    <div className='wrapper'>
      <h1>Feedback Model</h1>
      {step===1 &&
          <button onClick={handleModel} style={{padding:"10px 20px", borderRadius:"5px", backgroundColor:"green", fontWeight:"bold", color: "white"}}>Feedback</button>     
      }
      {step === 2 &&
          <div className='feedback-model'>
               <div className='Btns'>
               {options.map((item)=> 
                <button className='btn' onClick={()=> setFeedback(item.name)}>
                <span>{item.emoji}</span>
                <p>{item.name}</p>
              </button>
              )}
               </div>
               <textarea name="" id="" onChange={(e)=> setMessage(e.target.value)} placeholder='Give your own feedback (optional)'/>
                <button onClick={handleSubmit} style={{backgroundColor:"blue", border:"none", outline:"none", padding:"10px 20px", borderRadius:'10px', color:"white", fontWeight:"bold"}}>Submit</button>
          </div>
      } 

      
      {
        step === 3 && 
        <div className='feedback'>
          <div style={{display:"flex", gap:"20px"}}>
          <h1>User Feedback</h1>
          <button style={{color:"red", background:"none",fontSize:"30px", top:"0", border:"none", outline:"none", borderRadius:"5px"}} onClick={handleCancel}>X</button>
          </div>
          <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column", backgroundColor:"cyan", padding:"20px", borderRadius:"10px"}}>
          <h2>Feedback: {feedback}</h2>
          <h3>Your Feedback: {message}</h3>
          <p>Thank you for your feedback</p>
          </div>
        </div>
      }
    </div>
  )
}

export default App
