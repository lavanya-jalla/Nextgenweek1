import React, { useState } from 'react';
import Chatbox from './Chatbox';
import CreateDocument from './CreateDocument';
import EditDocument from './EditDocument';
import CollaborativeDocument from './CollaborativeDocument';




const NavBar = () => {
  const [activeComponent, setActiveComponent] = useState('Chat');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Chatbox':
        return <Chatbox />;
      case 'CreateDocument':
        return <CreateDocument />;
      case 'EditDocument':
        return <EditDocument />;
      case 'CollaborativeDocument':
        return <CollaborativeDocument />;
      default:
        return <Chatbox />;
    }
  };

  return (
    <div>
    
      
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '10px' }}>
        <h1>Dynamic Collab</h1>
        <nav>
          <button onClick={() => setActiveComponent('Chatbox')}>Chat</button>
          <button onClick={() => setActiveComponent('CreateDocument')}>Create Document</button>
          <button onClick={() => setActiveComponent('EditDocument')}>Edit Document</button>
          <button onClick={() => setActiveComponent('Collaborate')}>Collaborate</button>
        </nav>
      </header>
      <main>{renderComponent()}</main>
    </div>
  );
};

export default NavBar;