import React, { useState } from 'react';
import './App.css';
import data from './data';

// function App() {
//   const [openIndices, setOpenIndices] = useState([]);

//   const handleAccordionClick = (index) => {
//     // If the clicked accordion is already open, remove it from the list
//     // Otherwise, add it to the list of open accordions
//     if (openIndices.includes(index)) {
//       setOpenIndices(openIndices.filter((i) => i !== index));
//     } else {
//       setOpenIndices([...openIndices, index]);
//     }
//   };

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index} className="accordion">
//           <div className="question">
//             <button onClick={() => handleAccordionClick(index)}>
//               {openIndices.includes(index) ? '-' : '+'}
//             </button>
//             <h2>{item.question}</h2>
//           </div>
//           {openIndices.includes(index) && <h3>{item.answer}</h3>}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


function App(){

  const [openIndices, setOpenIndices] = useState([]);

  function handleAccordionClick(index){
    if(openIndices.includes(index)){
      setOpenIndices(openIndices.filter((i)=> i != index))
    }
  else{
    setOpenIndices([...openIndices, index]);
  }
  }

  return (
     <div>
     {data.map((item, index)=>(
      <div key={index} className='accordion'>
          <div className='question'>
              <button onClick={()=> handleAccordionClick(index)}>
                {openIndices.includes(index) ? '-' : '+'}
              </button>
              <h2>{item.question}</h2>
          </div>
          {openIndices.includes(index) && <h3>{item.answer}</h3>}
      </div>
     ))

     }
     </div>
  );
}

export default App;