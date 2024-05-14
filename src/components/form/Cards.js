import React from 'react'
import '../../App.css';

export const Cards = ({expenses}) => {
  const totalBudget = 50000.00;
  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  const totalRem = totalBudget - totalAmount;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="card">
            <h2>Budget</h2>
            <h6>Total Budget : ${totalBudget.toFixed(2)}</h6>
        </div>
        <div className="card">
            <h2>Expense</h2>
            <h6>Total Expense : ${totalAmount.toFixed(2)}</h6>
        </div>
        <div className="card">
            <h2>Remaining</h2>
            <h6>Remaining Budget : ${totalRem.toFixed(2)}</h6>
        </div>
    </div>
  );
};

