from django.apps import AppConfig
from django.db.models.signals import post_migrate


class ReservationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'reservation'
    # def ready(self):
    #     from .views import schedule_expiration_emails
    #     # schedule_expiration_emails()
    #     post_migrate.connect(schedule_expiration_emails, sender=self)

# class ReservationConfig(AppConfig):
#     name = 'reservation'

#     def ready(self):
#         from .views import schedule_expiration_emails
#         post_migrate.connect(schedule_expiration_emails, sender=self)