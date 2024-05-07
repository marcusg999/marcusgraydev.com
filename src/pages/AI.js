import React from 'react';
import Main from '../layouts/Main';

const AI = () => (
  <Main>
    <div style={{ margin: '0 auto', marginLeft: '80px' }}>

      <header>AI Art and projects for clients</header>
      <h3>Short film treated with AI model | For Client</h3>
      <a href="https://www.instagram.com/grayswans_web3_consulting/">
        <img
          src="/images/projects/AIeros.png"
          alt="AI-related topic"
          style={{
            display: 'block',
            maxWidth: '100%',
            height: '500px',
            margin: '0 auto',
            border: '3px solid black',
          }}
        />
      </a>
      <h3> AI Music Video</h3>
      <a href="https://www.instagram.com/p/CiJhvjsAGvc/">
        <img
          src="/images/projects/AIMusicvid.jpg"
          alt="AI-related topic"
          style={{
            display: 'block',
            maxWidth: '100%',
            height: '600px',
            margin: '0 auto',
            border: '3px solid black',
          }}
        />
      </a>
      {/* Add your AI-related content here */}
    </div>
  </Main>
);

export default AI;
