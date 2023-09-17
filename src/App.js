// Use ==> npm run both ==> to run this.


// Use {rfc} for basic and {rafce} for export function based components.
import "./App.css";
import React, { useState } from "react";
// For Routing.
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
// Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/noteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// No notecontext only notestate.

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 4000);
  };

  return (
    <NoteState NoteState >
      {/* Wrap between <Notestate></Notestate> */}
      <Router>
        <Navbar />
        <Alert Alerts={alert} />
        <Routes>
          <Route exact path="/" element={<Home showalert={showalert} />} ></Route>
          <Route exact path="/login" element={<Login showalert={showalert} />}></Route>
          <Route exact path="/signup" element={<SignUp showalert={showalert} />}></Route>
        </Routes>
      </Router>
    </NoteState >
  );
}

export default App;

