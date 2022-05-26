import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
let Expenses = (props) => {
  return (
    <div className="expenses">
      {props.item.map((itm, ind) => {
        const { date, title, amount } = itm;
        return (
          <ExpenseItem
            key={ind}
            index={ind}
            date={date}
            title={title}
            amount={amount}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
