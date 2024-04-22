from django.conf import settings
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer

# create a class to handle contact form submission, this saves the submission to the database,
# then an email is built to send to my email address. then the response is sent the email defined in 
# send_mail() parameters
class ContactMessageCreateAPIView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        subject = 'New contact message from {}'.format(instance.name)
        message = 'Name: {}\nEmail: {}\n\n{}'.format(
            instance.name, instance.email, instance.message
        )
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [settings.DEFAULT_TO_EMAIL])
        return Response(serializer.data)