from django.shortcuts import render  # Импорт функции render для отображения шаблонов.
from requests import Response  # Импорт Response из библиотеки requests (не используется в коде, но часто применяется для возврата ответов API).
from rest_framework import viewsets  # Импорт viewsets для создания набора представлений.
from api_app.models import Patient, HealthCareDetails  # Импорт моделей Patient и HealthCareDetails.
from api_app.serializers import HealthCareDetailsSerializer, PatientSerializer  # Импорт сериализаторов для моделей.


# Функция представления для отображения домашней страницы.
def home(request):
    # Извлекаем все объекты из модели HealthCareDetails.
    hc = HealthCareDetails.objects.all()
    # Отображаем шаблон 'home.html' и передаем данные (все объекты HealthCareDetails).
    return render(request, 'home.html', {'hc': hc})

# Набор представлений для работы с моделью HealthCareDetails через API.
class HealthCareDetailsViewSet(viewsets.ModelViewSet):
    # Указываем, какие данные использовать для этого ViewSet (все объекты модели HealthCareDetails).
    queryset = HealthCareDetails.objects.all()
    # Указываем сериализатор, который будет преобразовывать объекты модели в формат JSON и обратно.
    serializer_class = HealthCareDetailsSerializer

# Набор представлений для работы с моделью Patient через API.
class PatientViewSet(viewsets.ModelViewSet):
    # Указываем, какие данные использовать для этого ViewSet (все объекты модели Patient).
    queryset = Patient.objects.all()
    # Указываем сериализатор, который будет преобразовывать объекты модели в формат JSON и обратно.
    serializer_class = PatientSerializer
