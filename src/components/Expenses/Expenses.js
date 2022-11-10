import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
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