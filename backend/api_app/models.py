from django.db import models


class Patient(models.Model):
    """Модель Patient представляет данные о пациентах."""
    # Уникальный идентификатор пациента (автоматически увеличивается).
    patient_id = models.BigAutoField(primary_key=True)
    # Имя пациента (строка длиной до 50 символов).
    first_name = models.CharField(max_length=50)
    # Фамилия пациента (строка длиной до 50 символов).
    last_name = models.CharField(max_length=50)
    # Группа крови пациента (строка длиной до 50 символов).
    blood = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name


class HealthCareDetails(models.Model):
    """Модель HealthCareDetails представляет информацию о медицинском обслуживании пациента."""
    # Уникальный идентификатор для записи медицинских данных (автоматически увеличивается).
    healthcare_id = models.BigAutoField(primary_key=True)
    # Уникальный номер медицинской карты пациента.
    healthcarenumber = models.BigIntegerField(unique=True)
    # Врач, назначенный пациенту (строка длиной до 50 символов).
    physician = models.CharField(max_length=50)
    # Внешний ключ, связывающий медицинские данные с конкретным пациентом.
    # related_name='patient_healthcare' позволяет удобно обращаться к медицинским данным из объекта Patient.
    # on_delete=models.CASCADE означает, что при удалении пациента все связанные с ним медицинские данные будут также удалены.
    fk = models.ForeignKey(Patient, related_name='patient_healthcare', on_delete=models.CASCADE)
