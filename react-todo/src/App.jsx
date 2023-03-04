import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodo, setIncompleteTodo] = useState(["aaaa", "todo"]);
  const [completeTodo, setCompleteTodo] = useState(["iiii", "complete"]);
  return (
  <>
    <div className="input-area">
      <input placeholder="todo"/>
      <button>add</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のtodo</p>
      <ul>

        {incompleteTodo.map((todo) => {
          return(
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
            <button>削除</button>
          </div>
          )
        })}

      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了したtodo</p>
        <ul>

          {completeTodo.map((todo) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            )
          })}

        </ul>
    </div>
  </>
  );
};
