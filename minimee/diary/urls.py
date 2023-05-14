from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = [
    path('diary/', DiaryPost.as_view()),
    path('diary/<int:pk>/', DiaryDetail.as_view()),
    path('qa/', QAPost.as_view()),
    path('qa/<int:pk>/', QADetail.as_view()),
    path('goal/',GoalPost.as_view()),
    path('goal/<int:pk>/',GoalDetail.as_view()),
] 

urlpatterns = format_suffix_patterns(urlpatterns)