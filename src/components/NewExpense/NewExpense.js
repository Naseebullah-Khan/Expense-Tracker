import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import { EXPENSES } from "../../resources/resources";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      id: "e" + (EXPENSES.length + 1),
      ...enteredExpenseData,
    };
    props.onNewExpenseData(newExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <input
          className="button"
          onClick={startEditingHandler}
          type="button"
          value="Add New Expense"
        />
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={SaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
