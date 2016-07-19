from setuptools import setup, find_packages

setup(
    name='django-redux-generator',
    version='0.1.1',
    description='Generate redux boilerplate',
    author='David Sanders',
    author_email='dsanders@rapilabs.com',
    packages=find_packages(),
    package_data={
        'django_redux_generator': ['templates/django_redux_generator/*.js'],
    },
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Framework :: Django',
        'Intended Audience :: Developers',
    ],
    install_requires=[
        'Django',
        'inflection',
    ],
)
