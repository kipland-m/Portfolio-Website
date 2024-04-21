from django.db import models

# Create your models here.

# Defining a model to handle the data submitted by the contact page
class ContactMessage(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
