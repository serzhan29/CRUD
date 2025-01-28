import React from 'react';

export default function AddPatient({ handleAddSubmit, handleCancelBtn }) {
  // Компонент AddPatient предназначен для добавления нового пациента.
  // Он принимает два пропса:
  // 1. handleAddSubmit - функция, вызываемая при отправке формы.
  // 2. handleCancelBtn - функция, вызываемая при нажатии кнопки "Отмена".
  // Общие стили
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '10vh',
      padding: '2px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      color: 'blue',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      padding: '10px',
      marginTop: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    buttonPrimary: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonDanger: {
      padding: '10px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Добавление пациента:</h3>
      <form onSubmit={handleAddSubmit} style={styles.form}>
        <label style={styles.label}>
          Имя
          <input type="text" name="first_name" style={styles.input} />
        </label>
        <label style={styles.label}>
          Фамилия
          <input type="text" name="last_name" style={styles.input} />
        </label>
        <label style={styles.label}>
          Группа Крови
          <input type="text" name="blood" style={styles.input} />
        </label>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.buttonPrimary}>
            Добавить
          </button>
          <button onClick={handleCancelBtn} style={styles.buttonDanger}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
