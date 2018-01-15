from django.conf.urls import include, url
from django.contrib import admin

from . import views

app_name = 'radius'

urlpatterns = [
    url(r'^$', views.radius, name='radius'),
]