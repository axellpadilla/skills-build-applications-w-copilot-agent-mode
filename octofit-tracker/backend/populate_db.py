import os
import django
from datetime import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'octofit_tracker.settings')
django.setup()

from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout


# Create users
test_user1 = User.objects.create(email='alice@example.com', name='Alice', password='password1')
test_user2 = User.objects.create(email='bob@example.com', name='Bob', password='password2')

# Create team with member emails
test_team = Team.objects.create(name='Team Octo', member_emails=[test_user1.email, test_user2.email])

# Create workout
test_workout = Workout.objects.create(name='Pushups', description='Do 20 pushups', difficulty='Easy')

# Create activities
Activity.objects.create(user_email=test_user1.email, activity_type='run', duration=30, date=datetime.now())
Activity.objects.create(user_email=test_user2.email, activity_type='walk', duration=45, date=datetime.now())

# Create leaderboard
Leaderboard.objects.create(team_name=test_team.name, points=100)

print('Test data populated successfully!')
