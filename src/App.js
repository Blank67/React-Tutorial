import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const expenses = [
    {
      id:'e1',
      expenseDate: new Date(2022, 8, 9),
      expenseTitle: "Food",
      expenseAmount: 50,
    },
    {
      id:'e2',
      expenseDate: new Date(2022, 8, 10),
      expenseTitle: "Petrol",
      expenseAmount: 100,
    },
    {
      id:'e3',
      expenseDate: new Date(2022, 8, 11),
      expenseTitle: "Movies",
      expenseAmount: 200,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
