import React from 'react';

export const Form = ({ onSubmit, formData, onChange, onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
      <button style={styles.closeButton} onClick={onClose}>&times;</button>
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
          <button style={{ padding: '12px', borderRadius: '18px'}} className='btn btn-primary' type="submit" value={formData.btn}>
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
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#d4d4d3',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#000',
    width: '30px', // Set the width and height to make it round
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
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
  },
};
