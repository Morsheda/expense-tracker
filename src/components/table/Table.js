import React from 'react'
import './Table.css';

export const Table = ({expenses, edited, deleted}) => {
  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  return (
    <div className="custom-table">
            <div className="row record header">
                <div className="cell-header">Category</div>
                <div className="cell-header">Amount</div>
                <div className="cell-header">Date</div>
                <div className="cell-header">Time</div>
                <div className="cell-header">Action</div>
            </div>
            {expenses.map((expense, index) => (
                <div className="row record" key={index}>
                    <div className="cell">{expense.category}</div>
                    <div className="cell">{expense.amount}</div>
                    <div className="cell">{expense.date}</div>
                    <div className="cell">{expense.time}</div>
                    <div className="cell">
                        <button className='btn btn-edit' onClick={() => edited(index)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-delete' onClick={(e) => deleted(index)}>Delete</button>
                    </div>
                </div>
            ))}
            <div className="row record">
                <div className="cell-total">Total:</div>
                <div className="cell-total">{totalAmount.toFixed(2)}</div>
                <div className="cell-total"></div>
                <div className="cell-total"></div>
                <div className="cell-total"></div>
            </div>
        </div>
  );
};
