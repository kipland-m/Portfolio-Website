from django.urls import path
from .views import ContactMessageCreateAPIView

urlpatterns = [
    path('contact/', ContactMessageCreateAPIView.as_view(), name='contact-message-create'),
]
