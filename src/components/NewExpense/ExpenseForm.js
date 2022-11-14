import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    //Methdod 1
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    //Method 2. Both are correct but we will use Method 1 
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value
        // });
        // setUserInput((prevState) => { //We use this approach as in previous way if we have multiple states we won't get the latest previous state every time.
        //     return {...userInput, enteredTitle:e.target.value};
        // });
    }
    const amountChangeHandler = (e) => {
        console.log(e.target.value);
        setEnteredAmount(e.target.value);
        // setUserInput((prevState) => {
        //     return {...userInput, enteredAmount:e.target.value};
        // });
    }
    const dateChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredDate(e.target.value);
        // setUserInput((prevState) => {
        //     return {...userInput, enteredDate:e.target.value};
        // });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2022-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;