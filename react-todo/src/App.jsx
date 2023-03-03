import React from "react";

const App = () => {
  const OnClickButton = () => alert();
  const ContentStyle = {
    color: "blue",
    fontSize: "18px"
  }
  return (
    <>
     <h1 style={{ color: 'red' }}>hello!Im YutoFunaki!</h1>
     <p style={ContentStyle}>how are you?</p>
     <button onClick={OnClickButton}>ボタン</button>
    </>
    );
};

export default App;