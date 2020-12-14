import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import List from './components/List';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row col-6 offset-3 p-2">
        <List />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
