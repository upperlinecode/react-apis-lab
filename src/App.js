import React from 'react';
import Squirrel from './Components/Squirrel.js';
import './App.css';

const App = () => {
  const component = new React.Component();
  
  component.state = {
    'squirrels': []
  }
  
  component.componentDidMount = () => {
    fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=ZKMGUEeVwzaNvBWZq0OBuPISZ&running=true')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        component.setState({'squirrels':data})
      })
      .catch(e => console.log(e))
  }

  component.render = () => {
    return (
      <div className="App">
        <h1>
          2018 NYC Squirrel Survey Data
          <p className="RecordsCount">{component.state.squirrels.length} observations</p>
        </h1>
        
        {component.state.squirrels.sort((a, b) => (a.date > b.date) ? 1 : -1)
          .map((val,ind) =>
          <Squirrel data={val} key={ind} />
        )}
      </div>
    );
  }

  return component
}

export default App;
