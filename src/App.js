import React, { Component } from 'react';
import './App.css';
import Header  from './components/Header';
import Main from './components/Main';
import AppProvider from './context/AppContext';

class App extends Component {
  render() {
    return (
      <AppProvider>
         <Header/>
          <Main/>
      </AppProvider>
    );
  }
}

export default App;
