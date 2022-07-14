import React from 'react';

const Home = () => {
    return (
    <div>
        <div style={{
        height: '10%',
        display: 'flex',
        }}>
        </div>
        <h1 style={{
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center', // <-- the magic
            width: '100%',
        }}>About Me</h1><br/>     

        <img src={require('../pictures/myface.jpg')}
        style={{
            maxWidth: '200px',
            maxHeight: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: 'red',
            margin: '0 auto',
            display: 'block',
        }}
        />  

    </div>
  );
};

export default Home;