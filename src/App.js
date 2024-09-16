import React from 'react';
import WebPage from './components/WebPage.js'; // Make sure your WebPage is correctly imported
import Footer from './components/Footer.js';



const App = () => {
  return (
    <div className="App">
      
      <WebPage />
      
      <Footer/>
      
    </div>
  );
};

export default App;