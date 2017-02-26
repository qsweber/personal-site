import os
import json

from django.shortcuts import render


def index(request):
    return render(
        request,
        'personal_site/index.html',
        {
            'home_page_content': json.loads(os.environ['HOME_PAGE_CONTENT']),
            'ga_code': os.environ['GA_CODE'],
        },
    )
