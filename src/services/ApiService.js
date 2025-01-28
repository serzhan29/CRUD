import axios from "axios";

// Функция для получения списка пациентов
export function getpatient() {
  // Выполняем GET запрос к серверу для получения данных о пациентах
  return axios.get('http://127.0.0.1:8000/patient/')
    .then(res => {
      // Возвращаем данные ответа
      return res.data;
    });
}

// Функция для добавления нового пациента
export function addpatient(patient) {
  // Выполняем POST запрос к серверу для добавления нового пациента
  return axios.post('http://127.0.0.1:8000/patient/', {
    patient_id: null, // Указываем, что ID пациента пока отсутствует (будет создан сервером)
    first_name: patient.first_name.value, // Значение поля "Имя"
    last_name: patient.last_name.value, // Значение поля "Фамилия"
    blood: patient.blood.value, // Значение поля "Группа крови"
  })
  .then(res => {
    // Возвращаем данные ответа
    return res.data;
  });
}

// Функция для редактирования данных пациента
export function editpatient(id, patient) {
  // Выполняем PUT запрос к серверу для обновления данных пациента по его ID
  return axios.put('http://127.0.0.1:8000/patient/' + id + '/', {
    first_name: patient.first_name.value, // Обновленное значение поля "Имя"
    last_name: patient.last_name.value, // Обновленное значение поля "Фамилия"
    blood: patient.blood.value, // Обновленное значение поля "Группа крови"
  })
  .then(res => {
    // Возвращаем данные ответа
    return res.data;
  });
}

// Функция для удаления пациента
export function deletepatient(id) {
  // Выполняем DELETE запрос к серверу для удаления пациента по его ID
  return axios.delete('http://127.0.0.1:8000/patient/' + id + '/')
    .then(res => {
      // Возвращаем данные ответа
      return res.data;
    });
}
