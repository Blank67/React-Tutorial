import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    // console.log(props.items);
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p>No Expense found.</p>
    if (filteredExpenses.length > 0) {
        if (filteredExpenses.length === 1) {
            expenseContent = filteredExpenses.map((expense) => (
                <div key='task'>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    <p>Only single Expense here. Please add more...</p>
                </div>
            ));
        } else {
            expenseContent = filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ));
        }
    }





    // if (filteredExpenses.length > 0) {
    //     expenseContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContent}
        </Card>
    );
}

export default Expenses;