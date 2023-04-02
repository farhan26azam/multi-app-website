import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import Membership from "./pages/Membership";
import { Routes, Route } from "react-router-dom";
import Write from "./pages/Write";
import SignIn from "./pages/SignIn";
import Get from "./pages/Get";
import Sidebar from "./components/sidebar";
import Profile from "./pages/Profile";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import Listings from "./pages/Listings";
import Agent from "./pages/Agent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="membership" element={<Membership />} />
          <Route path="write" element={<Write />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="get" element={<Get />} />
          <Route path="profile" element={<Profile />} />
          <Route path="message" element={<Message />} />
          <Route path="settings" element={<Settings />} />
          <Route path="listings" element={<Listings />} />
          <Route path="agent" element={<Agent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
