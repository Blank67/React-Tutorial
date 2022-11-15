import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Food",
    amount: 50,
    date: new Date(2022, 7, 9),
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
    date: new Date(2021, 8, 11),
  },
  {
    id:'e4',
    title: "Entertainment",
    amount: 2000,
    date: new Date(2022, 8, 11),
  },
];
// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

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
