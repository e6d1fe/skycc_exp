# Generated by Django 4.2.1 on 2023-05-13 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diary',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='diary/'),
        ),
    ]
