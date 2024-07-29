from django.db import models
class user (models.Model):
    username = models.CharField(max_length=100), # type: ignore
    password = models.CharField(max_length=500) # type: ignore


# Create your models here.
