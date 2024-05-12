import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Heading } from "./components/Heading";
import { Form } from "./components/form/Form";
import { Cards } from "./components/form/Cards";
import { Table } from "./components/table/Table";
import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    { category: 'Groceries', amount: '1000', date: '2024-05-12', time: '10:00' },
    { category: 'Transportation', amount: '500', date: '2024-05-11', time: '15:30' },
    { category: 'Donation', amount: '1500', date: '2024-05-11', time: '18:30' },
    { category: 'Gift', amount: '1500', date: '2024-05-11', time: '20:30' },
  ]);
  const [formData, setFormData] = useState({
      category: '',
      amount: '',
      date: '',
      time: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false); 
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (editIndex !== null) {
        const updatedExpenses = [...expenses];
        updatedExpenses[editIndex] = formData;
        setExpenses(updatedExpenses);
        setEditIndex(null); 
      } else {
        setExpenses([...expenses, formData]);
      }
      setFormData({ category: '', amount: '', date: '', time: '' });
      setShowForm(false);
  };

  const handleClose = () => {
    setFormData({ category: '', amount: '', date: '', time: '' });
    setShowForm(false);
  };

  const edited = (index) => {
    setEditIndex(index);
    setFormData(expenses[index]);
    setShowForm(true);
  };
  
  const deleted = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
    setShowWarning(true); 
    setTimeout(() => {
      setShowWarning(false);
    }, 2000);
  };

  return (
    <div className="App">
      <Heading />
      <Cards expenses={expenses}/>
      <button style={{ padding: '14px 22px', borderRadius: '18px'}} className='btn btn-success' onClick={() => setShowForm(true)}>+ Add Expense</button>
      <div className='row mt-3'>
        {showForm && (
          <Form
            onSubmit={handleSubmit}
            formData={formData}
            onChange={handleChange}
            onClose={handleClose}
          />
        )}
        {showWarning && <div className="alert alert-warning" role="alert">Expense deleted!</div>}
        <Table expenses={expenses} edited={edited} deleted={deleted} />
      </div>
    </div>
  );
}

export default App;
