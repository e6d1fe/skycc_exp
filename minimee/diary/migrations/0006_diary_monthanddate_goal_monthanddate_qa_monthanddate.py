# Generated by Django 4.2.1 on 2023-05-13 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0005_remove_qa_question_qa_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='diary',
            name='monthanddate',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='goal',
            name='monthanddate',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='qa',
            name='monthanddate',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]