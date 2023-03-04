/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import {ColorfulMessage} from "./components/ColorfulMessage";

const App = () => {
  console.log("yomikomi")
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(false);


  const OnClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setShowFlag(!showFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      showFlag || setShowFlag(true);
    } else {
      showFlag && setShowFlag(false);
    }
  }, [num]);
  //useEffect:最初の一回の処理だけ

  return (
    <>
     <h1 style={{ color: 'red' }}>hello!Im YutoFunaki!</h1>
     <ColorfulMessage color="yellow">How are you?</ColorfulMessage>
     <ColorfulMessage color="gray">Im good.</ColorfulMessage>
     <button onClick={OnClickCountUp}>ボタン</button>
     <br />
     <button onClick={onClickSwitchShowFlag}>on/off</button>
     <p>{num}</p>
     {showFlag && <p>かに</p>}
    </>
    );
};

export default App;