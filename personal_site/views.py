import os

from django.shortcuts import render


def index(request):
    return render(
        request,
        'personal_site/index.html',
        {},
    )
