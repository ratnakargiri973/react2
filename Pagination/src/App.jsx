import React, { useState } from "react";

const FOODS = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 20 },
  { id: 3, name: 'Fries', price: 30 },
  { id: 4, name: 'Pasta', price: 15 },
  { id: 5, name: 'Salad', price: 30 },
  { id: 6, name: 'Soup', price: 20 },
  { id: 7, name: 'Marshmallows', price: 10 },
  { id: 8, name: 'Ice cream', price: 20 },
  { id: 9, name: 'Cake', price: 30 },
  { id: 10, name: 'Donut', price: 5 },
  { id: 11, name: 'Sushi', price: 25 },
  { id: 12, name: 'Taco', price: 12 },
  { id: 13, name: 'Steak', price: 35 },
  { id: 14, name: 'Chicken Wings', price: 18 },
  { id: 15, name: 'Lasagna', price: 22 },
  { id: 16, name: 'Burrito', price: 15 },
  { id: 17, name: 'Sushi Roll', price: 27 },
  { id: 18, name: 'Grilled Cheese Sandwich', price: 10 },
  { id: 19, name: 'Hot Dog', price: 8 },
  { id: 20, name: 'Nachos', price: 12 },
  { id: 21, name: 'Ramen', price: 14 },
  { id: 22, name: 'Pho', price: 16 },
  { id: 23, name: 'Gyros', price: 18 },
  { id: 24, name: 'Ceviche', price: 20 },
  { id: 25, name: 'Miso Soup', price: 8 },
  { id: 26, name: 'Crispy Tofu', price: 12 },
  { id: 27, name: 'Paella', price: 28 },
  { id: 28, name: 'Fish and Chips', price: 17 },
  { id: 29, name: 'Shrimp Scampi', price: 24 },
  { id: 30, name: 'Cannoli', price: 10 },
  { id: 31, name: 'Churros', price: 7 },
  { id: 32, name: 'Baklava', price: 9 },
  { id: 33, name: 'Tiramisu', price: 12 },
  { id: 34, name: 'Cheesecake', price: 18 },
  { id: 35, name: 'Chocolate Fondue', price: 20 },
];

function App() {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(FOODS.length / pageSize);
  
  const currentFoods = FOODS.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Food Table with Pagination</h1>
      
      <table style={tableStyle}>
        <thead style={{padding: "20px", backgroundColor:"green"}}>
          <tr>
            <th>#</th>
            <th>Food Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentFoods.map((food, index) => (
            <tr key={food.id} style={{padding:"20px", backgroundColor:"lightcyan", border:"1px solid gray"}}>
              <td>{(currentPage - 1) * pageSize + index + 1}</td>
              <td>{food.name}</td>
              <td>${food.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={paginationStyle}>
        <button onClick={handlePrev} disabled={currentPage === 1} style={buttonStyle}>Prev</button>
        <span style={pageInfoStyle}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages} style={buttonStyle}>Next</button>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "20px",
  textAlign: "center",
  fontFamily: "'Arial', sans-serif"
};

const tableStyle = {
  margin: "0 auto",
  width: "80%",
  borderCollapse: "collapse",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const paginationStyle = {
  marginTop: "20px",
};

const pageInfoStyle = {
  margin: "0 10px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "0 10px",
};

export default App;
