import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const deleteHandler = (event) => {
        console.log("Delete Button Clicked!!",event);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate newDate={props.date} />
            <ExpenseDetails newTitle = {props.title} newAmount = {props.amount}/>
            <button onClick={deleteHandler}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;