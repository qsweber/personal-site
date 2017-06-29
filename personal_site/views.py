from django.shortcuts import redirect, render


def index(request):
    return render(
        request,
        'personal_site/index.html',
        {},
    )


def portfolio(request):
    return redirect('http://stackoverflow.com/story/qsweber')


def contact(request):
    return render(request, 'personal_site/contact.html', {})
