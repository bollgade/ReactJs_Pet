import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import "./styles/App.css";
import Posts from './pages/Posts';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
