import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { expenses } from "./resources/resources";

export default function App() {
  const onNewExpenseDataHandler = (newExpenseData) => {
    const data = {
      id: "e" + (expenses.length + 1),
      ...newExpenseData,
    };
    // console.log(data);
    expenses.push(data);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onNewExpenseData={onNewExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
