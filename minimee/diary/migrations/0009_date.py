# Generated by Django 4.2.1 on 2023-05-14 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0008_remove_goal_finished_at'),
    ]

    operations = [
        migrations.CreateModel(
            name='Date',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('d', models.DateField()),
            ],
        ),
    ]