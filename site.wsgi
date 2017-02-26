import django


def application(env, start_response):
    return django.core.handlers.wsgi.WSGIHandler()(env, start_response)
