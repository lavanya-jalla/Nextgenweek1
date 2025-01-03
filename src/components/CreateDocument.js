import React, { useState } from 'react';

const CreateDocument = () => {
  const [docTitle, setDocTitle] = useState('');
  const [docContent, setDocContent] = useState('');

  const handleCreate = () => {
    alert(`Document Created:\nTitle: ${docTitle}\nContent: ${docContent}`);
    setDocTitle('');
    setDocContent('');
  };

  return (
    <div>
      <h2>Create Document</h2>
      <input
        type="text"
        placeholder="Document Title"
        value={docTitle}
        onChange={(e) => setDocTitle(e.target.value)}
      />
      <textarea
        placeholder="Document Content"
        value={docContent}
        onChange={(e) => setDocContent(e.target.value)}
      ></textarea>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateDocument;
