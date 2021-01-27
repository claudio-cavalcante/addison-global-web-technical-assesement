import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

 
  const [activeId, setActiveId] = React.useState(1);

  const buttons = ["All promotions", "New customers"];

  const handleClick = index => {
    setActiveId(index);
  }

  return (
    <div className="App">
      <div className="row">
          {buttons.map((el, index) => {
            var className = `btn ${activeId === index ? "active" : ""}`;

            return (
              <button onClick={() => handleClick(index)} key={index} className={className}>{el}</button>
            )

          })}
      </div>
      <div className="promotions">

      </div>
    </div>
  );
}

export default App;
