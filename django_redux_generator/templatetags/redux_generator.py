from django import template
from inflection import camelize, underscore

register = template.Library()


@register.filter(name="camelize")
def camelize_filter(value, upper_first=True):
    return camelize(value, upper_first)


@register.filter(name="upper")
def upper_filter(value):
    return underscore(value).upper()
