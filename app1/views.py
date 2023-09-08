from django.shortcuts import render
from .models import Employee, Concern

def home(request):
    return render(request, 'home.html')

def concerns(request):
    if request.method == 'POST':
        employee_name = request.POST['employee_name']
        concern_text = request.POST['concern']

        # Create a new employee instance
        employee = Employee(name=employee_name)
        employee.save()

        # Create a new concern instance and associate it with the employee
        concern = Concern(employee=employee, description=concern_text)
        concern.save()

        # Optionally, you can perform additional operations or redirect the user to another page

    return render(request, 'concerns.html')

