# Generated by Django 4.2.1 on 2023-05-13 22:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0006_diary_monthanddate_goal_monthanddate_qa_monthanddate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='diary',
            name='monthanddate',
        ),
        migrations.RemoveField(
            model_name='goal',
            name='monthanddate',
        ),
        migrations.RemoveField(
            model_name='qa',
            name='monthanddate',
        ),
    ]