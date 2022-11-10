import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className = 'expenses'>
            {props.items.map((item,index) => {
                return (
                    <ExpenseItem
                        key ={index}
                        title={item.expenseTitle}
                        amount={item.expenseAmount}
                        date={item.expenseDate}
                    />
                )
            })}
        </Card>
    );
}

export default Expenses;