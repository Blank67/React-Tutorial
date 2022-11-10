import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className = 'expenses'>
            {props.items.map((item) => {
                return (
                    <ExpenseItem
                        title={item.expenseTitle}
                        amount={item.expenseAmount}
                        date={item.expenseDate}
                        location={item.locationOfExpenditure}
                    />
                )
            })}
        </Card>
    );
}

export default Expenses;