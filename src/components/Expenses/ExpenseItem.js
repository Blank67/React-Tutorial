import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.title);
    // const [amount,setAmount] = useState(props.amount);

    // const changeAmountHandler = () => {
    //     setAmount(100);
    // }
    const deleteHandler = () => {
        setTitle('Updated title!');
        console.log("Delete Button Clicked!!");
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate newDate={props.date} />
            <ExpenseDetails newTitle = {title} newAmount = {props.amount}/>
            {/* <button onClick={changeAmountHandler}>Change Amount to 100</button> */}
            <button onClick={deleteHandler}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;