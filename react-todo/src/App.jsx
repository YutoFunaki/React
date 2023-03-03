import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const OnClickButton = () => alert();
  return (
    <>
     <h1 style={{ color: 'red' }}>hello!Im YutoFunaki!</h1>
     <ColorfulMessage color="yellow">How are you?</ColorfulMessage>
     <ColorfulMessage color="gray">Im good.</ColorfulMessage>
     <button onClick={OnClickButton}>ボタン</button>
    </>
    );
};

export default App;