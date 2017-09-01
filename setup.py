from setuptools import find_packages, setup

setup(
    name='personal-site',
    version='0.0.3',
    description='Personal Website',
    author='Quinn Weber',
    maintainer='Quinn Weber',
    maintainer_email='quinnsweber@gmail.com',
    packages=find_packages(exclude=('tests',)),
    install_requires=(
        'django',
    ),
)
