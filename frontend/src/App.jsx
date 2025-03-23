import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Header from "./components/Header";

export default () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const getArtist = async (artist) => {
    try {
      const token = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data.artists.items); // Ajustado para acessar a lista de artistas
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black h-screen">
      <Header />
      
      <Search name={name} setName={setName} />

      <button onClick={() => getArtist(name)}>Search</button>

      <div>
        {data.length > 0 ? (
          <ul>
            {data.map((artist) => (
              <li key={artist.id}>{artist.name} {artist.id}</li>
            ))}
          </ul>
        ) : (
          <p>No artists found</p>
        )}
      </div>
    </div>
  );
};