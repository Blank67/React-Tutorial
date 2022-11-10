import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      expenseDate: new Date(2022, 8, 9),
      expenseTitle: "Food",
      expenseAmount: 50,
      locationOfExpenditure: "Burger King",
    },
    {
      expenseDate: new Date(2022, 8, 10),
      expenseTitle: "Petrol",
      expenseAmount: 100,
      locationOfExpenditure: "Petrol Pump",
    },
    {
      expenseDate: new Date(2022, 8, 11),
      expenseTitle: "Movies",
      expenseAmount: 200,
      locationOfExpenditure: "Movie Theater",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
