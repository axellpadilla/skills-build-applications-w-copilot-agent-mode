from django.db import models

# User model
class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=128)
    # Add other fields as needed

# Team model
class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    member_emails = models.JSONField(default=list)  # Store user emails as a list

# Activity model
class Activity(models.Model):
    user_email = models.EmailField()  # Reference user by email
    activity_type = models.CharField(max_length=50)
    duration = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

# Leaderboard model
class Leaderboard(models.Model):
    team_name = models.CharField(max_length=100)  # Reference team by name
    points = models.IntegerField(default=0)

# Workout model
class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    difficulty = models.CharField(max_length=50)
