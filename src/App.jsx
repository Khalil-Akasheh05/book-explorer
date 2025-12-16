import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookDetails from "./Pages/BookDetails";
import Footer from "./Components/Footer";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Books" element={<Books />}></Route>
            <Route path="/BookDetails/:id" element={<BookDetails />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;
