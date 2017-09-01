from django.conf.urls import url

from personal_site import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^portfolio/', views.portfolio),
    url(r'^contact/', views.contact),
]
