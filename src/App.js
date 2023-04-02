import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { EXPENSES } from "./resources/resources";

export default function App() {
  const [expenses, setExpenses] = useState(EXPENSES);

  const onNewExpenseDataHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseData={onNewExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
