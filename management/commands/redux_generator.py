from django.core.management.base import BaseCommand
from django.template.loader import render_to_string
from inflection import camelize, underscore


def generate_action_creator(action_name):
    return render_to_string('django_redux_generator/action_creator.js', {
        'action_name': action_name,
        'action_name_upper': underscore(action_name).upper(),
    })

def generate_thunk(action_name):
    return render_to_string('django_redux_generator/thunk_fetch.js', {
        'action_name': camelize(action_name),
        'action_name_upper': underscore(action_name).upper(),
    })


class Command(BaseCommand):
    help = 'Generate redux boilerplate'

    def add_arguments(self, parser):
        parser.add_argument('action_name', type=str)
        parser.add_argument('--thunk',
            action='store_true',
            dest='thunk',
            default=False,
            help='Generate a redux thunk')

    def handle(self, *args, **options):
        if options['thunk']:
            print(generate_thunk(options['action_name']))
        else:
            print(generate_action_creator(options['action_name']))
