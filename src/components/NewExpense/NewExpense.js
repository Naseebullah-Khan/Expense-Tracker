import ExpenseForm from "./ExpenseForm";
import { EXPENSES } from "../../resources/resources";

import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      id: "e" + (EXPENSES.length + 1),
      ...enteredExpenseData,
    };
    props.onNewExpenseData(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
