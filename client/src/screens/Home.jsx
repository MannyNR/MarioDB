import React from "react";
import image from "./mariogroup.jpeg";

const Home = () => {
  return (
    <div className="dashboard">
      <p className="welcome-text">It's me Mario! Welcome to our site!</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Home;
