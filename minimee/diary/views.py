from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .serializers import *
from .models import *
import random

# Create your views here.
# 달력에서 그날그날의 일기 보기
class DiaryDetail(APIView):
    def get_object(self, pk):
        try:
            return Diary.objects.filter(pk=pk)
        except Diary.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        diary = self.get_object(pk)
        serializer = DiarySerializer(diary)
        return Response(serializer.data)

# 오늘 일기 새로 추가
class DiaryPost(APIView):
    def get(self, request):
        diaries = Diary.objects.all()
        serializer = DiarySerializer(diaries, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DiarySerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# 문답 QA 새로 추가    
class QAPost(APIView):
    # 띄우는 코드
    def get(self, request):
        questions = list(Question.objects.all())
        random_question = random.choice(questions)
        serializer = QuestionSerializer(random_question)
        return Response(serializer.data)
    # question에 대한 답변 post
    def post(self, request):
        serializer = QASerializer(
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 달력에서 그날그날의 QA 보기
class QADetail(APIView):
    def get_object(self, pk):
        try:
            return QA.objects.get(pk=pk)
        except QA.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        question_answer = self.get_object(pk)
        serializer = QASerializer(question_answer)
        return Response(serializer.data)

# 목표 새로 추가
class GoalPost(APIView):
    def get(self, request):
        goals = Goal.objects.all()
        serializer = GoalSerializer(goals, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GoalSerializer(
            data = request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            

# 달력에서 그날그날의 목표 보기
class GoalDetail(APIView):
    def get_object(self, pk):   
        try:
            return Goal.objects.get(pk=pk)
        except Goal.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        goals_ = self.get_object(pk)
        serializer = GoalSerializer(goals_)
        return Response(serializer.data)