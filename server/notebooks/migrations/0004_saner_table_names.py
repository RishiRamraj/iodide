# Generated by Django 2.2.5 on 2019-09-23 21:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notebooks', '0003_notebook_revisions_most_recent_first'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='notebook',
            table='notebook',
        ),
        migrations.AlterModelTable(
            name='notebookrevision',
            table='notebook_revision',
        ),
    ]
