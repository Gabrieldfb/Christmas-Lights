import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isFirstLightOn, setIsFirstLightOn] = useState("off")
  const [isSecondLightOn, setIsSecondLightOn] = useState("off")
  const [isThirdLightOn, setIsThirdLightOn] = useState("off")
  function handleClick() {

    if (isFirstLightOn === "off") {
      setIsFirstLightOn("first light")
      setIsSecondLightOn("second light")
      setIsThirdLightOn("third light")
    } else {
      setIsFirstLightOn("off")
      setIsSecondLightOn("off")
      setIsThirdLightOn("off")
    }
  }
  return (
    <div className="App">
      <header className="Title">
        Christmas Light

      </header>
      <div>
        <div className="corpo">

          <div className={isFirstLightOn} />
          <div className={isSecondLightOn} />
          <div className={isThirdLightOn}/>
        </div>
        <div className="control">
          <button className="On_Off"
            onClick={handleClick}
          >

            On/Off

          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
