import React from 'react'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Ratnakar Giri");
  const [company, setCompany] = useState("Google");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  return (
    <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"flex-start", alignItems:"center", flexDirection:"column"}}>
      <h2>Email Template</h2>
      <div style={{display: "flex", justifyContent: "space-around", alignItems:'center', width:"100vw"}}>
        <div>
          <label htmlFor="">Name </label>
          <input type="text" name="" id="" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Company Name </label>
          <input type="text" name="" id="" value={company} onChange={(e)=> setCompany(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Effective Date </label>
          <input type="date" name="" id="" onChange={(e)=> setEffectiveDate(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Last Date </label>
          <input type="date" name="" id="" onChange={(e)=> setLastDate(e.target.value)}/>
        </div>

      </div>

      <div>
        <p>Hi,</p>
        <p>Please accept this email as my formal resignation from {company}. I have taken this decision as I have got a different/better work opportunity and would like to pursue my career in the same. <br />

        Request you to consider my letter of resignation effective from {effectiveDate}. I understand that as per the policy I am required to serve a notice period of 60 days and my last working day accordingly shall be {lastDate}. <br />

        I would request you to consider if an early release is possible. I am grateful to TwitX and looking forward to your support.</p>

        <p>
          Thanks and Regards,<br />
          <span>{name}</span>
        </p>
      </div>
    </div>
  )
}

export default App
