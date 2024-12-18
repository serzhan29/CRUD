import React, { useEffect, useState } from 'react';
import { getpatient, addpatient, editpatient, deletepatient } from '../services/ApiService';
import AddPatient from './AddPatient';
import EditPatient from './EditPatient';

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [showAddPatientForm, setShowAddPatientForm] = useState(false);
  const [showEditPatientForm, setShowEditPatientForm] = useState(false);
  const [selectedEditData, setSelectedEditData] = useState();

  useEffect(() => {
    let mount = true;
    getpatient().then((res) => {
      console.log('res from api', res);
      setPatients(res);
      return () => (mount = false);
    });
  }, []);

  const handleAddSubmit = (e) => {
    addpatient(e.target).then((res) => {
      setPatients(res);
    });
  };

  const handleEditBtn = (patient) => {
    setSelectedEditData(patient);
    console.log('patient selected is', patient);
    setShowEditPatientForm(true);
    setShowAddPatientForm(false);
  };

  const handleEditSubmit = (e, id) => {
    editpatient(id, e.target).then((res) => {
      setPatients(res);
    });
  };

  function handleCancelBtn() {
    setShowAddPatientForm(false);
  }

  const handleDeleteBtn = (id) => {
    deletepatient(id).then((res) => {
      setPatients(patients.filter((p) => p.patient_id !== id));
    });
  };

  // Стили
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      textAlign: 'left',
      borderBottom: '2px solid #ddd',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    buttonPrimary: {
      padding: '8px 15px',
      marginRight: '5px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonDanger: {
      padding: '8px 15px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    addButton: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'block',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Список пациентов</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Имя</th>
            <th style={styles.th}>Фамилия</th>
            <th style={styles.th}>Группа Крови</th>
            <th style={styles.th}>Действие</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => {
            return (
              <tr key={patient.patient_id}>
                <td style={styles.td}>{patient.first_name}</td>
                <td style={styles.td}>{patient.last_name}</td>
                <td style={styles.td}>{patient.blood}</td>
                <td style={styles.td}>
                  <button
                    style={styles.buttonPrimary}
                    onClick={() => handleEditBtn(patient)}
                  >
                    Изменить
                  </button>
                  <button
                    style={styles.buttonDanger}
                    onClick={() => handleDeleteBtn(patient.patient_id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        style={styles.addButton}
        onClick={() => setShowAddPatientForm(true)}
      >
        Добавить нового пациента
      </button>
      {showAddPatientForm && (
        <AddPatient
          handleAddSubmit={handleAddSubmit}
          handleCancelBtn={handleCancelBtn}
        />
      )}
      {showEditPatientForm && (
        <EditPatient
          handleEditSubmit={handleEditSubmit}
          selectedEditData={selectedEditData}
        />
      )}
    </div>
  );
}
