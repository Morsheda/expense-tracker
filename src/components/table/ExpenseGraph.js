import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import '../../App.css';

export const ExpenseGraph = ({ expenses }) => {
    const getDayOfMonth = (dateString) => {
        const date = new Date(dateString);
        return date.getDate();
    };

    const chartData = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1),
    datasets: [{
        label: 'Expenses',
        data: Array.from({ length: 31 }, () => 0),
        fill: true, // Area fill added
        backgroundColor: 'rgba(0, 128, 128, 0.2)', // Fill color
        borderColor: 'rgb(0, 128, 128)',
        tension: 0.1
    }]
    };
    let maxAmount = 0;
    let totalSpent = 0;
    const monthlyBudget = 50000.00;
    expenses.forEach(expense => {
        const dayOfMonth = getDayOfMonth(expense.date);
        chartData.datasets[0].data[dayOfMonth - 1] += parseFloat(expense.amount);
        const amount = parseFloat(expense.amount);
        totalSpent += amount;
        if (amount > maxAmount) {
        maxAmount = amount;
        }
    });
    const percentageSpent = (totalSpent / monthlyBudget) * 100;
    const chartOptions = {
    scales: {
        y: {
        title: {
            display: true,
            text: 'Amount Spent'
        },
        grid: {
            display: false
        }
        },
        x: {
        title: {
            display: true,
            text: 'Day of the Month'
        },
        grid: {
            display: false
        }
        }
    }
    };
    
    
  return (
    <div className="container">
        <div className="graph-container">
            <h2>Expense Graph</h2>
            <Line data={chartData} options={chartOptions}/>
        </div>
        <div className="progress-container">
            {/* <div className="progress-bar" style={{ width: `${percentageSpent}%` }}></div> */}
            {/* <ProgressBar className="progress-bar" label={`${percentageSpent}%`}/>; */}
            <CircularProgressbar value={percentageSpent} text={`${percentageSpent}% spent`} strokeWidth={8} 
            styles={buildStyles({
                strokeLinecap: "round",
                textSize: "6px",
                textColor: "rgba(200, 0, 0",
                pathColor: "rgba(200, 0, 0, 0.7)",
                trailColor: "rgba(128, 128, 128, 0.7)",
            })} />
        </div>
    </div>
  );
};
