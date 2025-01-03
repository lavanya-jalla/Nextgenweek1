
import React, { useState } from 'react';

const CollaborativeDocument = () => {
  const [userEmail, setUserEmail] = useState('');
  const [docId, setDocId] = useState('');

  const handleCollaborate = () => {
    alert(`Collaboration Requested:\nDocument ID: ${docId}\nUser Email: ${userEmail}`);
    setUserEmail('');
    setDocId('');
  };

  return (
    <div>
      <h2>Collaborate</h2>
      <input
        type="text"
        placeholder="Document ID"
        value={docId}
        onChange={(e) => setDocId(e.target.value)}
      />
      <input
        type="email"
        placeholder="Collaborator's Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={handleCollaborate}>Invite</button>
    </div>
  );
};

export default CollaborativeDocument;

