from django.conf.urls import include, url

from personal_site import views

urlpatterns = [
        url(r'^$', views.index),
        url(r'^stories/', include('django_photo_stories.urls')),
]
