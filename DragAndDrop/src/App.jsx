import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    const updatedItems = [...items];
    const [removed] = updatedItems.splice(draggedItem, 1);
    updatedItems.splice(index, 0, removed);
    setItems(updatedItems);
    setDraggedItem(null);
  };

  function handleClick() {
    alert("List saved successfully");
  }

  return (
    <div className="container">
      <h3>Drag and Drop List</h3>
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          className="draggable-item"
        >
          {item.content}
        </div>
      ))}
      <button onClick={handleClick} className="save-button">
        Save List
      </button>
    </div>
  );
};

export default App;
