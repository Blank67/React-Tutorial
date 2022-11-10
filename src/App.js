import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      expenseDate: new Date(2022, 8, 9),
      expenseTitle: "Food",
      expenseAmount: 50,
    },
    {
      expenseDate: new Date(2022, 8, 10),
      expenseTitle: "Petrol",
      expenseAmount: 100,
    },
    {
      expenseDate: new Date(2022, 8, 11),
      expenseTitle: "Movies",
      expenseAmount: 200,
    },
  ];
  return (
    <div>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
