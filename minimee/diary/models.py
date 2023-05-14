from django.db import models

# class User(models.Model):
#     character = models.ImageField(upload_to="character/")

class Diary(models.Model):
    FEELING_CHOICES = [
        ('HAPPY', 'Happy'),
        ('SAD', 'Sad'),
        ('SOSO', 'Soso'),
        ('ANGRY', 'Angry'),
    ]
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    img = models.ImageField(upload_to="diary/", blank=True, null=True)
    feeling = models.CharField(max_length=10, choices=FEELING_CHOICES, default='HAPPY')

    def __str__(self):
        return self.title
    
class Question(models.Model):
    content = models.TextField()

    def __str__(self):
        return self.content

class QA(models.Model):
    question = models.TextField(blank=True, null=True)
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.created_at)

class Goal(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now=True)
    is_achieved = models.BooleanField(default=False)

    def __str__(self):
        return self.title
        

