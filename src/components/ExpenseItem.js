import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card';

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate newDate = {props.date}/>
            <ExpenseDetails newTitle = {props.title} newLocation = {props.location} newAmount = {props.amount}/>
        </Card>
    );
}

export default ExpenseItem;