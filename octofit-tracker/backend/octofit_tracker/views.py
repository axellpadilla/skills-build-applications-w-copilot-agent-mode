
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Team, Activity, Leaderboard, Workout
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer

import os

# Helper to get Codespace name from environment or fallback
def get_codespace_url():
    codespace_name = os.environ.get('CODESPACE_NAME')
    if codespace_name:
        return f"https://{codespace_name}-8000.app.github.dev/"
    # fallback for local
    return "http://localhost:8000/"

@api_view(['GET'])
def api_root(request, format=None):
    base_url = get_codespace_url() + "api/"
    return Response({
        'users': base_url + 'users/',
        'teams': base_url + 'teams/',
        'activity': base_url + 'activity/',
        'leaderboard': base_url + 'leaderboard/',
        'workouts': base_url + 'workouts/',
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
