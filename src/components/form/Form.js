import React from 'react';
import '../../App.css';

export const Form = ({ onSubmit, formData, onChange, onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
      <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={onSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Category:
              <input
                style={styles.input}
                type="text"
                name="category"
                placeholder="Expense category"
                required
                value={formData.category}
                onChange={onChange}
              />
            </label>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Amount:
              <input
                style={styles.input}
                type="number"
                name="amount"
                placeholder="Amount"
                required
                value={formData.amount}
                onChange={onChange}
              />
            </label>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Date:
              <input
                style={styles.input}
                type="date"
                name="date"
                value={formData.date}
                onChange={onChange}
              />
            </label>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Time:
              <input
                style={styles.input}
                type="time"
                name="time"
                value={formData.time}
                onChange={onChange}
              />
            </label>
          </div>
          <button style={{ padding: '10px 28px', borderRadius: '18px'}} className='btn btn-success' type="submit" value={formData.btn}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: 'linear-gradient(0deg, rgb(202, 180, 180), rgb(117, 167, 221))',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    position: 'relative', // Ensure the close button is positioned relative to the modal
  },
  form: {
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    minWidth: '200px',
  },
};
