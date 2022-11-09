import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate newDate = {props.date}/>
            <ExpenseDetails newTitle = {props.title} newLocation = {props.location} newAmount = {props.amount}/>
        </div>
    );
}

export default ExpenseItem;