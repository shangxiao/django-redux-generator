from django.core.management.base import BaseCommand
from django.template.loader import render_to_string


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
            template_name = 'django_redux_generator/thunk_fetch.js'
        else:
            template_name = 'django_redux_generator/action_creator.js'

        print(render_to_string(template_name, {
            'action_name': options['action_name'],
        }))
