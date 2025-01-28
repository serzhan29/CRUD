from rest_framework import serializers  # Импортируем модуль для работы с сериализаторами.
from api_app.models import Patient, HealthCareDetails  # Импортируем модели для сериализации.

# Сериализатор для модели Patient.
class PatientSerializer(serializers.HyperlinkedModelSerializer):
    """
    Сериализатор преобразует данные модели Patient в JSON-формат для работы с API
    и обратно (JSON -> объект модели).
    """
    class Meta:
        model = Patient  # Указываем модель, для которой создается сериализатор.
        fields = ['patient_id', 'last_name', 'first_name', 'blood']  # Поля модели, которые будут включены в сериализацию.

# Сериализатор для модели HealthCareDetails.
class HealthCareDetailsSerializer(serializers.HyperlinkedModelSerializer):
    """
    Сериализатор для HealthCareDetails, включающий вложенные данные пациента.
    """
    fk = PatientSerializer()  # Используем сериализатор PatientSerializer для поля `fk`, чтобы включить данные пациента.

    class Meta:
        model = HealthCareDetails  # Указываем модель, для которой создается сериализатор.
        fields = ['healthcare_id', 'healthcarenumber', 'physician', 'fk']  # Поля модели, которые будут включены в сериализацию.
