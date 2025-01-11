import React from 'react'
import { useState } from 'react'

function App() {
  const [color1, setColor1] = useState("#FF5733");
  const [color2, setColor2] = useState("#33FF57");

  function handleMixColor(color1, color2){
     const r1 = parseInt(color1.slice(1,3), 16);
     const g1 = parseInt(color1.slice(3,5), 16);
     const b1 = parseInt(color1.slice(5,7), 16);

     const r2 = parseInt(color2.slice(1,3), 16);
     const g2 = parseInt(color2.slice(3,5), 16);
     const b2 = parseInt(color2.slice(5,7), 16); 

     const mixedColor = `#${Math.round((r1 + r2) / 2).toString(16)}${Math.round((g1 + g2) / 2).toString(16)}${Math.round((b1 + b2) / 2).toString(16)}`;

     return mixedColor;
  }

  function handleResetColor(){
    setColor1("#FF5733");
    setColor2("#33FF57")
  }
  return (
    <div style={{width:"100vw", height:"100vh", display:'flex', justifyContent:"flex-start", alignItems:"center", flexDirection:"column", gap:"30px"}}>
      <div style={{width:"80vw", height:"400px", display:'flex', justifyContent:"center", alignItems:"center", border:"1px solid gray", marginTop:"20px", backgroundColor: handleMixColor(color1, color2) }}>
        <h2>Mixed Color</h2>
      </div>
      <div  style={{display:'flex', justifyContent:"flex-start", alignItems:"center", flexDirection:"column", gap:"30px"}}>
        <div>
        <label htmlFor="">Color-1 </label>
        <input type="color" name="" id="" value={color1} onChange={(e)=> setColor1(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Color-2 </label>
        <input type="color" name="" id="" value={color2} onChange={(e)=> setColor2(e.target.value)}/>
        </div>
      </div>
      <button onClick={handleResetColor} style={{border:"none", outline:"none", padding:"10px 20px", borderRadius:"5px", backgroundColor:"green", color:"white"}}>Reset</button>
    </div>
  )
}

export default App
