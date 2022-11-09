import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      expenseDate: new Date(2022, 8, 9),
      expenseTitle: "Food",
      expenseAmount: 10,
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

      {expenses.map((item) => {
        return(
          <ExpenseItem
            title={item.expenseTitle}
            amount={item.expenseAmount}
            date={item.expenseDate}
            location={item.locationOfExpenditure}
      ></ExpenseItem>
        )
      })}

      {/* <ExpenseItem
        title={expenses[1].expenseTitle}
        amount={expenses[1].expenseAmount}
        date={expenses[1].expenseDate}
        location={expenses[1].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].expenseTitle}
        amount={expenses[2].expenseAmount}
        date={expenses[2].expenseDate}
        location={expenses[2].locationOfExpenditure}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
