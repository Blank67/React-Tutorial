import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    // console.log(props.items);
    return (
        <Card className='expenses'>
            {props.items.map((item, index) => {
                return (
                    <ExpenseItem
                        key={index}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                )
            })}
        </Card>
    );
}

export default Expenses;