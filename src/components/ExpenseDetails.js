import './ExpenseItem.css'

function ExpenseDetails(props) {
    return (
        <div className='expense-item__description'>
            <h2>{props.newTitle}</h2>
            <h2>{props.newLocation}</h2>
            <div className='expense-item__price'>Rs {props.newAmount}</div>
        </div>
    );
}

export default ExpenseDetails;