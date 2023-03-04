import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const OnClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
     <h1 style={{ color: 'red' }}>hello!Im YutoFunaki!</h1>
     <ColorfulMessage color="yellow">How are you?</ColorfulMessage>
     <ColorfulMessage color="gray">Im good.</ColorfulMessage>
     <button onClick={OnClickCountUp}>ボタン</button>
     <p>{num}</p>
    </>
    );
};

export default App;