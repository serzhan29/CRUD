from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from auth_app.forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from api_app.models import Patient, HealthCareDetails
from django.contrib.auth import logout


@login_required
def home(request):
    if request.method == 'POST' and 'logout' in request.POST:
        logout(request)  # Завершаем сессию пользователя
        return redirect('loginpage')  # Перенаправляем на страницу входа (или другую)

    current_user = request.user
    patients = Patient.objects.all()

    return render(request, 'auth_app/home.html', {'patients': patients, 'current_user': current_user})

def registerpage(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user = form.cleaned_data['username']
            messages.success(request,'Аккаунт успешно создан' +user)
            return redirect('loginpage')

    return render(request, 'auth_app/registerPage.html', {'form':form})

def loginpage(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username = username, password = password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.info(request,'Логин или Пароль неправильны')
            return redirect('loginpage')


    return render(request, 'auth_app/loginPage.html')

def logoutpage(request):
    logout(request)
    return redirect('loginpage')


def individualreport(request):
    if request.method == 'POST':
        healthcarenumber = request.POST.get('healthcarenumber')
        physician = request.POST.get('physician')
        patient_id = request.POST.get('patient')

        # Создаем новый объект HealthCareDetails
        patient = Patient.objects.get(patient_id=patient_id)
        new_record = HealthCareDetails.objects.create(
            healthcarenumber=healthcarenumber,
            physician=physician,
            fk=patient
        )

        # Перенаправляем на страницу с отчетом
        return redirect('home')

    # Получаем список пациентов для отображения в форме
    patients = Patient.objects.all()
    return render(request, 'auth_app/individualReport.html', {'patients': patients})


def report_view(request):
    # Получаем список всех записей медицинских данных
    healthcare_details = HealthCareDetails.objects.all()

    # Передаем их в шаблон для отображения
    return render(request, 'auth_app/report.html', {'healthcare_details': healthcare_details})
