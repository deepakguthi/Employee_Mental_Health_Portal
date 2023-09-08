from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    # other fields for employee information

    def __str__(self):
        return self.name

class Concern(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    subject = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # other fields for the concern

    def __str__(self):
        return self.subject

class Reply(models.Model):
    concern = models.ForeignKey(Concern, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # other fields for the reply

    def __str__(self):
        return self.message
