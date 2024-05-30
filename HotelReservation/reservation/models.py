# Create your models here.
from datetime import datetime, timedelta
from django.db import models
from django.utils import timezone
from room.models import Room
class Booking(models.Model):
    user= models.CharField(max_length=255)
    contact= models.CharField(max_length=10)
    email=models.EmailField(default='None')
    room_type= models.ForeignKey(Room, on_delete=models.CASCADE)
    bookingDate = models.DateTimeField(auto_now_add=True)
    checkInDate = models.DateField()
    checkOutDate = models.DateField()
    totalPrice = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=30, choices=[
        ('pending', 'Pending'),
        ('CheckOut', 'CheckOut'),
        ('confirmed', 'Confirmed'),
        ('cancled', 'Cancled'),
    ])
    expirationDate = models.DateTimeField(null=True, blank=True)
    def save(self, *args, **kwargs):
        if self.status == "pending":
            self.expiration_date = datetime.now() + timedelta(minutes=1)
        super().save(*args, **kwargs)
    def __str__(self):
        return f" Room {self.room_type.room_number} - Customer {self.user}"

