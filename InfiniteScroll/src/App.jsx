// import React, { useEffect, useState } from "react";

// function App() {
//   const [arr, setArr] = useState([]);
//   const [call, setCall] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const data = async (page) => {
//     setLoading(true);
//     try {
//       let res = await fetch(
//         `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
//       );
//       let da = await res.json();
//       setArr((pre) => [...pre, ...da]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         setCall((pre) => pre + 1);
//       }
//     };
//     data(call);
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [call]);

//   return (
//     <div>
//       <div style={{ textAlign: "center" }}>
//         {arr.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "20px",
//               border: "2px solid black",
//               width: "50%",
//               margin: "20px auto",
//               borderRadius: "10px",
//             }}
//           >
//             {item.title}
//           </div>
//         ))}
//         {loading && (
//           <div style={{ fontSize: "18px", color: "#555", margin: "20px" }}>
//             Loading...
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';

const App = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [loading, setLoading] = useState(false);

  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`),
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50 && !loading) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div style={{ padding: '16px' }}>
      <h2>Infinite Scroll</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '8px',
              margin: '8px 0',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {loading && <p style={{ textAlign: 'center' }}>Loading more...</p>}
    </div>
  );
};

export default App;

