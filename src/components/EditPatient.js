import React from 'react';

export default function EditPatient({ handleEditSubmit, selectedEditData }) {
  // Общие стили
  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '400px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      padding: '8px',
      marginTop: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <>
      <h3 style={styles.heading}>Форма редактирования:</h3>
      <form
        onSubmit={(e) => handleEditSubmit(e, selectedEditData.patient_id)}
        style={styles.form}
      >
        <label style={styles.label}>
          Имя
          <input
            type="text"
            name="first_name"
            defaultValue={selectedEditData.first_name}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Фамилия
          <input
            type="text"
            name="last_name"
            defaultValue={selectedEditData.last_name}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Группа Крови
          <input
            type="text"
            name="blood"
            defaultValue={selectedEditData.blood}
            style={styles.input}
          />
        </label>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Изменить
        </button>
      </form>
    </>
  );
}
