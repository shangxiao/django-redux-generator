# django-redux-generator

A django app to generate boilerplate for redux & redux-thunk


## Installation

```
pip install git+https://github.com/rapilabs/django-redux-generator.git
```

from `requirements.txt`:
```
-e git+https://github.com/rapilabs/django-redux-generator.git#egg=django-redux-generator
```

edit `settings.py`:
```python
INSTALLED_APPS = [
    ...
    'django_redux_generator',
]
```

## Usage
```
./manage.py redux_generator [--thunk] <action_name>
```

## Why is this a thing?
The intention here is to introspect & generate actions for django models.  At the moment it's purely an action generator and doesn't really need to be a django management command.
