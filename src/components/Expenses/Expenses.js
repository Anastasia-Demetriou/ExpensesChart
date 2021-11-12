import React, { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "../ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> 
        <ExpensesChart expenses={filteredExpenses}/>

        {filteredExpenses.lenght === 0 && <p>No expenses found. </p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </div>
    </div>
  );
}

export default Expenses;
