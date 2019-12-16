import React from 'react';
import './App.css';

const App = () => {
  const component = new React.Component();
  
  // add a componentDidMount lifecycle method to fetch data from the API

  component.render = () => {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
      </div>
    );
  }

  return component
}

export default App;
