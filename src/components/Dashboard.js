import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import ChatBox from "./Chatbox";
import CreateDocument from "./CreateDocument";
import EditDocument from "./EditDocument";
import CollaborativeDocument from "./CollaborativeDocument";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="content">
        <ChatBox />
        <CreateDocument />
        <EditDocument />
        <CollaborativeDocument />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;