import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

let ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <button type="reset" onClick={() => console.log("delete", props.index)}>
          Delete
        </button>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
