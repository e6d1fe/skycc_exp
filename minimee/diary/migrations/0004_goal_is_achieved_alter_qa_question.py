# Generated by Django 4.2.1 on 2023-05-13 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0003_goal_question_diary_feeling_qa'),
    ]

    operations = [
        migrations.AddField(
            model_name='goal',
            name='is_achieved',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='qa',
            name='question',
            field=models.ManyToManyField(blank=True, null=True, related_name='question', to='diary.question'),
        ),
    ]
