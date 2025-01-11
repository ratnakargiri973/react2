import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  function handleExpenses() {
    if (!date || !price || !category) {
      alert("Please fill out all fields.");
      return;
    }

    const newExpense = { date, price: parseFloat(price), category };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    setDate("");
    setPrice("");
    setCategory("");
  }

  const totalExpenses = expenses.reduce((total, expense) => total + expense.price, 0);

  function handleDelete(index){
    const updatedExpenses = expenses.filter((expense,i)=> i != index)
    setExpenses(updatedExpenses);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "50px" }}>
      <h1>Expenses Tracker</h1>
      
      <div style={{ width: "25vw", height: "auto", border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px", padding: "20px" }}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="foods">Foods</option>
          <option value="entertainments">Entertainments</option>
          <option value="cloths">Cloths</option>
          <option value="transport">Transport</option>
          <option value="others">Others</option>
        </select>
        <button onClick={handleExpenses}>Add Expense</button>
      </div>
      
      {/* Expenses List */}
      <div style={{ width: "50vw", height: "auto", border: "1px solid gray", padding: "20px" }}>
        <h2>Expenses List</h2>
        {expenses.length === 0 ? (
          <p>No expenses recorded yet.</p>
        ) : (
          <ul style={{listStyle: 'none'}}>
              {expenses.map((expense, index) => (
              <li style={{display:'flex', justifyContent:"flex-start", alignItems:"center",gap:'20px'}}>
                <p>{expense.date} - {expense.category} - {expense.price}</p> 
                 <button onClick={() => handleDelete(index)} style={{padding:"5px 10px", border:"none", outline:"none", backgroundColor:"red", borderRadius:"5px"}}>Delete</button>
              </li>
              ))}
                </ul>
            
        )}
      </div>

      <div style={{ width: "50vw", height: "auto", border: "1px solid gray", padding: "20px" }}>
        <h2>Total Expenses</h2>
        <p>
          <strong>Total Expenses: ${totalExpenses.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  border: "1px solid gray",
  padding: "10px",
  textAlign: "left",
};

const tableCellStyle = {
  border: "1px solid gray",
  padding: "10px",
};

export default App;
