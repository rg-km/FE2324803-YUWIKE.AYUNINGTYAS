import "./App.css";
import Navbar from "./components/Navbar";
// TODO: answer here
import React from "react";
import LikeDislikeButton from "./components/LikeDislikeButton";
import PostCard from "./components/PostCard";

function App() {
  // TODO: answer here

  return (
    <div aria-label="App">
      <h1 aria-label="App Title">Day 1 Assigment React</h1>
      <Navbar />
      <LikeDislikeButton />
      <PostCard />
    </div>
  );
}

export default App;
