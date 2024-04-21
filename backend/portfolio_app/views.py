from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer

# Create your views here.


# create a class to handle contact form submission
class CreateContactMessageAPIView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        subject = 'New contact message from {}'.format(instance.name)
        message = 'Name: {}\nEmail: {}\n\n{}'.format(
            instance.name, instance.email, instance.message
        )
        return Response(serializer.data)