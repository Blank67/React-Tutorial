import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Food",
    amount: 50,
    date: new Date(2022, 8, 9),
  },
  {
    id:'e2',
    title: "Petrol",
    amount: 100,
    date: new Date(2022, 8, 10),
  },
  {
    id:'e3',
    title: "Movies",
    amount: 200,
    date: new Date(2022, 8, 11),
  },
];

const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // debugger;
      return [expense,...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
