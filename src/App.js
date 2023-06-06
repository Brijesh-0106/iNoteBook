import "./App.css";
import React from "react";
// For React Router Dom.
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import Alert from "./components/Alert";
// No notecontext only notestate.

function App() {
  return (
    <NoteState>
      {/* only wrap content between <Notestate></Notestate> */}
      <Router>
        <Navbar />
        <Alert message="Alert will be worked later" />
        <Routes>
          <Route exact path="/" element={<Home />} >
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;

