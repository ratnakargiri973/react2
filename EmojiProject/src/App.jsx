import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const ACCESS_KEY = 'eb3aa13df1b14cc7bc614fc2d7f894f41b09d68a';

function App() {
  const [emojis, setEmojis] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryValue, setCategoryValue] = useState("all");

  useEffect(() => {
    fetchEmojis();
    emojiCategories();
  }, []);

  const fetchEmojis = async () => {
    try {
      const response = await axios.get(`https://emoji-api.com/emojis?access_key=${ACCESS_KEY}`);
      setEmojis(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch emojis');
      console.error(err);
      setLoading(false);
    }
  };

  const emojiCategories = async () => {
    try {
      const response = await axios.get(`https://emoji-api.com/categories?access_key=${ACCESS_KEY}`);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredEmojis = emojis.filter((emoji) => {
    const matchesSearch = emoji.subGroup.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryValue === "all" || emoji.group === categoryValue;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (emojiCharacter) => {
    navigator.clipboard.writeText(emojiCharacter).then(() => {
      alert(`Copied: ${emojiCharacter}`);
    });
  };

  return (
    <div className="container">
      <div className="controls">
        <select
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.slug}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading emojis...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="emoji-box">
          <ul className="emoji-list">
            {filteredEmojis.map((emoji, index) => (
              <li key={index}>
                <div
                  className="emoji-character"
                  onClick={() => handleCopy(emoji.character)}
                >
                  {emoji.character}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
