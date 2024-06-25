import React from "react";
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Nevigation";
import Detail from "./routes/Detail";

function App() {
  return (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/" exact ={true} Component = {Home} />
      <Route path = "/about" Component={About} />
      <Route path="/movie-detail" Component={Detail} />
        </Routes>
  </HashRouter>
)}

export default App;