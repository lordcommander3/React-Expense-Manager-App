import React, { useState, useEffect } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";
let DUMMY_EXPENSE = [];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddexpense={addExpenseHandler} />
      {}
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
