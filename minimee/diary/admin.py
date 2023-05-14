from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Diary)
admin.site.register(Question)
admin.site.register(QA)
admin.site.register(Goal)

