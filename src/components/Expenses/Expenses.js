import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2015");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Option Three
  // let expensesContent = <p>No Expenses Found</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((element) => (
  //     <ExpenseItem
  //       key={element.id}
  //       title={element.title}
  //       amount={element.amount}
  //       date={element.date}
  //     />
  //   ));
  // }

  return (
    <li>
      <Card className="expenses">
        {/* Controlled component: When you handel the value and changes to value in parent component */}
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Option Four */}
        <ExpensesList items={filteredExpenses} />

        {/* {expensesContent} */}

        {/* Option Two */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((element) => (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        ))} */}

        {/* Option One */}
        {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((element) => (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        ))
      )} */}
      </Card>
    </li>
  );
}
