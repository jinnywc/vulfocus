# Generated by Django 3.1.4 on 2021-06-05 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dockerapi', '0008_auto_20210605_0001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timemoudel',
            name='time_id',
            field=models.CharField(default='d4f3664c-8a11-4931-ac35-5e1969c0289a', max_length=255, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]