import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

export default () => {
  const [token, setToken] = useState("")
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          "grant_type=client_credentials",
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Basic " + btoa(client_id + ":" + client_secret),
            },
          }
        );

        setToken(response.data.access_token);

        // Renova o token 5 minutos antes da expiração (expires_in está em segundos)
        setTimeout(fetchToken, (response.data.expires_in - 300) * 1000);
      } catch (error) {
        console.error("Erro ao buscar token", error);
      }
    };

    fetchToken();
  }, [client_id, client_secret]);

  return (
    <div className="bg-black min-h-screen">
      <Header token={token} />
      <Main token={token} />
    </div>
  );
};