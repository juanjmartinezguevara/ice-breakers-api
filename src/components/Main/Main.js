import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";

function Main() {
  const [ib, setIb] = useState("Click the button below to get started");

  const array = ["Ice-breaker 1", "Ice-breaker 2", "Ice-breaker 3"];

  useEffect(() => {
    axios
      .get(
        "https://graph.facebook.com/v13.0/me/messenger_profile?fields=ice_breakers&access_token=<PAGE_ACCESS_TOKEN>"
      )
      .then((res) => {
        console.log(res.data);
        setIb(res.data);
      });
  }, []);

  const getIcebreaker = () => {
    return (
      <div>
        <h1>{setIb(array[Math.floor(Math.random() * array.length)])}</h1>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="main-icebreaker main-container">
        <h1 className="main-heading-1">
          {ib}
          {ib == "Click the button below to get started" ? "..." : null}
        </h1>
        <button onClick={() => getIcebreaker()} className="main-button">
          Find an Ice Breaker!
        </button>
      </div>
      <span></span>
      <div className="main-signup main-container">
          <h1>Want to submit your own icebreakers?</h1>
          <button className="main-button">Sign Up!</button>
      </div>
    </div>
  );
}

export default Main;
