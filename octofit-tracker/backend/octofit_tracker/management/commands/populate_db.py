from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import datetime

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data.'

    # This script populates the database with test data for users, teams, activities, leaderboard, and workouts.

    def handle(self, *args, **kwargs):
        # The following code inserts test data for all collections required by the app.
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Users
        alice = User.objects.create(email='alice@example.com', name='Alice', password='password1')
        bob = User.objects.create(email='bob@example.com', name='Bob', password='password2')
        charlie = User.objects.create(email='charlie@example.com', name='Charlie', password='password3')


        # Teams (store member emails as list of strings)
        team_alpha = Team.objects.create(name='Team Alpha', member_emails=[str(alice.email), str(bob.email)])
        team_beta = Team.objects.create(name='Team Beta', member_emails=[str(charlie.email)])


        # Workouts
        pushups = Workout.objects.create(name='Pushups', description='Do 20 pushups', difficulty='Easy')
        situps = Workout.objects.create(name='Situps', description='Do 30 situps', difficulty='Medium')
        run = Workout.objects.create(name='Run', description='Run 1 mile', difficulty='Hard')


        # Activities (reference user by email as string)
        Activity.objects.create(user_email=str(alice.email), activity_type='run', duration=30, date=datetime.now())
        Activity.objects.create(user_email=str(bob.email), activity_type='walk', duration=45, date=datetime.now())
        Activity.objects.create(user_email=str(charlie.email), activity_type='pushups', duration=10, date=datetime.now())


        # Leaderboard (reference team by name as string)
        Leaderboard.objects.create(team_name=str(team_alpha.name), points=150)
        Leaderboard.objects.create(team_name=str(team_beta.name), points=80)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully!'))
