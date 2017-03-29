import os


def environ(request):
    return {
        'environ': os.environ,
    }
