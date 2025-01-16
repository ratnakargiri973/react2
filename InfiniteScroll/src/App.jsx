import React, { useEffect, useState } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const [call, setCall] = useState(1);
  const [loading, setLoading] = useState(false);

  const data = async (page) => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      );
      let da = await res.json();
      setArr((pre) => [...pre, ...da]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setCall((pre) => pre + 1);
      }
    };
    data(call);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [call]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {arr.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "20px",
              border: "2px solid black",
              width: "50%",
              margin: "20px auto",
              borderRadius: "10px",
            }}
          >
            {item.title}
          </div>
        ))}
        {loading && (
          <div style={{ fontSize: "18px", color: "#555", margin: "20px" }}>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
