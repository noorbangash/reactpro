import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // use state
  // const [title, setTital] = useState(props.title);
  // const [newTitle, setNewTital] = useState("");

  //
  //    const clickHandler = () => {
  //      setTital(newTitle);
  //    };
  //    const ChangeHandler = (event) => {
  //      setNewTital(event.target.value);
  //    };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* for use state <input type="text" value={newTitle} onChange={ChangeHandler} />
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};
export default ExpenseItem;
