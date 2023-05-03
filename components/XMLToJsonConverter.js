import React, { useState } from 'react';
import { parseString } from 'xml2js';

const XMLToJsonConverter = () => {
  const [jsonContent, setJsonContent] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const convertXMLToJson = async (xml) => {
    parseString(xml, (error, result) => {
      if (error) {
        console.error('Error parsing XML:', error);
      } else {
        setJsonContent(JSON.stringify(result, null, 2));
      }
    });
  };

  const handleFileDrop = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type === 'text/xml') {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const xml = e.target.result;
        await convertXMLToJson(xml);
      };
      reader.readAsText(file);
    } else {
      alert('Please drop an XML file.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonContent).then(
      () => {
        setCopySuccess('✅');
        setTimeout(() => setCopySuccess(''), 2000);
      },
      () => {
        setCopySuccess('Failed to copy.');
      },
    );
  };

  const macOSButtonStyle = {
    background: 'linear-gradient(to bottom, #ffffff 0%, #e1e1e1 100%)',
    border: '1px solid #bbb',
    borderRadius: '15px',
    boxShadow: '0px 1px 0px #ccc',
    color: '#333',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '10px',
    marginRight: '10px',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    textShadow: '0px 1px 0px #fff',
  };

  return (
    <div>
      <div
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        style={{
          width: '100%',
          height: '150px',
          border: '2px dashed #4CAF50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Drop stack.xml here
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '1rem' }}>
        <button onClick={copyToClipboard} style={macOSButtonStyle}>
          Copy to Clipboard
        </button>
        {copySuccess && <span style={{ color: 'green' }}>{copySuccess}</span>}
      </div>      
      <div
        style={{
          width: '100%',
          height: '300px',
          overflowY: 'scroll',
          border: '1px solid #ccc',
          marginTop: '1rem',
          padding: '1rem',
          whiteSpace: 'pre-wrap',
        }}
      >
        {jsonContent}
      </div>
    </div>
  );
};

export default XMLToJsonConverter;
