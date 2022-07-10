import React, { useState, useEffect } from "react";
import { CONFIG } from "./config";
import GifCard from "./GifCard";
import SearchIcon from "./search.svg";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifResult, setGifResult] = useState([]);

  useEffect(() => {
    fetchFeaturedResult();
  }, []);

  async function fetchFeaturedResult(limit = 50) {
    const data = await (
      await fetch(
        `${CONFIG.DOMAIN}/v2/featured?client_key=${CONFIG.CLIENT_KEY}country=IN&key=${CONFIG.TENOR_API_KEY}&limit=${limit}&media_filter=${CONFIG.FORMAT}`
      )
    ).json();
    const resultSet = data?.results;
    setGifResult(resultSet);
  }


  async function fetchSearchResult(searchKey, limit = 50) {
    const data = await (
      await fetch(
        `${CONFIG.DOMAIN}/v2/search?q=${searchKey}&key=${CONFIG.TENOR_API_KEY}&limit=${limit}&media_filter=${CONFIG.FORMAT}`
      )
    ).json();
    const resultSet = data?.results;
    setGifResult(resultSet);
  }

  return (
    <div className="app">
      <h1>Giffy Land</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Gifs !!"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => fetchSearchResult(searchTerm)}
        />
      </div>

      {gifResult?.length > 0 ? (
        <div className="container">
          {gifResult.map((gifImg) => (
            <GifCard gif={gifImg} key={gifImg.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Gifs found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
