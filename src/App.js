import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const expenses = [
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

  const [addedExpense,setAddedExpense] = useState(expenses)

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    const addedExpObj = [
      ...addedExpense,
      expense
    ];
    setAddedExpense(addedExpObj);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {addedExpense}/>
    </div>
  );
}

export default App;
