import React, { useState } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const OPTIONS = [
    {
      id: '1',
      text: '100ml',
    },
    {
      id: '2',
      text: '200ml',
    },
    {
      id: '3',
      text: '400ml',
    },
    {
      id: '4',
      text: '500ml',
      isDisabled: true,
    },
    {
      id: '5',
      text: '800ml',
    },
  ];

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", flexDirection:"column"}}>
      <h2>Inline Options</h2>
      <h3>Select size of milk</h3>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px"}}>
        {OPTIONS.length > 0 &&
          OPTIONS.map((option) => (
            <button
              key={option.id}
              value={option.text}
              onClick={() => handleClick(option.id)}
              disabled={option.isDisabled}
              style={{
                backgroundColor: selectedId === option.id ? 'cyan' : 'lightGray', 
                cursor: option.isDisabled ? 'not-allowed' : 'pointer',
                border:"none",
                outline:"none"
              }}
            >
              {option.text}
            </button>
          ))}
      </div>
      <p>You selected: {selectedId ? OPTIONS.find((opt) => opt.id === selectedId).text : 'None'}</p>
    </div>
  );
}

export default App;
