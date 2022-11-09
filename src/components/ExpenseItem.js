import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date().toLocaleDateString();
    const expenseTitle = 'Food';
    const expenseAmount = 10;
    const locationOfExpenditure = 'Burger King'
    
    return(
        <div className='expense-item'>
            <div>Expense Items</div>
            <div className='expense-item__description'>
                <h2>{expenseDate}</h2>
                <h2>{expenseTitle}</h2>
                <h2>{locationOfExpenditure}</h2>
                <div className='expense-item__price'>Rs {expenseAmount}</div>
                {/* <h2>Petrol</h2>
                <div className='expense-item__price'>Rs 100</div>
                <h2>Movies</h2>
                <div className='expense-item__price'>Rs 200</div> */}
            </div>
        </div>
    );
}

export default ExpenseItem;