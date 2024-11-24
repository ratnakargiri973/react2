import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]); // Initialize state as an empty array
  const [searchId, setSearchId] = useState(""); // State to store the search input
  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        setData(response.data); // Set the fetched data to state
        setFilteredData(response.data); // Initially set filteredData to all albums
      })
      .catch((err) => {
        console.log(err); // Log error if the request fails
      });
  }, []);

  // Filter the albums based on the search ID
  useEffect(() => {
    if (searchId === "") {
      setFilteredData(data); // If no search term, show all albums
    } else {
      setFilteredData(
        data.filter((album) => album.id.toString().includes(searchId)) // Filter by ID
      );
    }
  }, [searchId, data]); // Re-run the filter whenever searchId or data changes

  return (
    <div>
      {/* Search Bar */}
      <input
        type="number"
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)} // Update searchId state on change
      />

      {/* Display filtered data */}
      {filteredData.length > 0 ? (
        filteredData.map((album) => (
          <div key={album.id}>
            <p>ID: {album.id}</p> {/* Render album id */}
            <p>Title: {album.title}</p> {/* Render album title */}
          </div>
        ))
      ) : (
        <p>No albums found.</p> // Show if no albums match the search
      )}
    </div>
  );
}

export default App;
