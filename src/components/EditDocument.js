import React, { useState } from 'react';

const EditDocument = () => {
  const [docId, setDocId] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleEdit = () => {
    alert(`Document Edited:\nID: ${docId}\nNew Content: ${newContent}`);
    setDocId('');
    setNewContent('');
  };

  return (
    <div>
      <h2>Edit Document</h2>
      <input
        type="text"
        placeholder="Document ID"
        value={docId}
        onChange={(e) => setDocId(e.target.value)}
      />
      <textarea
        placeholder="New Content"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      ></textarea>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EditDocument;