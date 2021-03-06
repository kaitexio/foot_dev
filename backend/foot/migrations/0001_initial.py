# Generated by Django 3.0.4 on 2020-08-20 16:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='League',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='リーグ名')),
            ],
            options={
                'verbose_name': 'リーグ名',
                'verbose_name_plural': 'リーグ名',
                'db_table': 'foot_league',
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='タイトル')),
                ('date', models.DateTimeField(blank=True, null=True, verbose_name='掲載日時')),
                ('body', models.CharField(default=None, max_length=5000, verbose_name='本文')),
                ('url', models.URLField(default=None, unique=True, verbose_name='URL')),
                ('img', models.CharField(blank=True, default=None, max_length=200, null=True, verbose_name='イメージ')),
                ('media', models.CharField(default=None, max_length=100, verbose_name='掲載メディア')),
                ('public', models.BooleanField(default=True, verbose_name='公開')),
                ('views', models.PositiveIntegerField(default=0, verbose_name='閲覧数')),
            ],
            options={
                'verbose_name': '記事',
                'verbose_name_plural': '記事',
                'db_table': 'foot_news',
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='タグ名')),
            ],
            options={
                'verbose_name': 'タグ',
                'verbose_name_plural': 'タグ',
                'db_table': 'foot_tag',
            },
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='チーム名')),
                ('league', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foot.League', verbose_name='所属リーグ')),
            ],
            options={
                'verbose_name': 'チーム',
                'verbose_name_plural': 'チーム',
                'db_table': 'foot_team',
            },
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='名前')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foot.Team')),
            ],
            options={
                'verbose_name': 'プレイヤー',
                'verbose_name_plural': 'プレイヤー',
                'db_table': 'foot_player',
            },
        ),
        migrations.CreateModel(
            name='NewsTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foot.News')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foot.Tag')),
            ],
            options={
                'verbose_name': '記事・タグ',
                'verbose_name_plural': '記事・タグ',
                'db_table': 'foot_news_tag',
            },
        ),
        migrations.AddField(
            model_name='news',
            name='tag',
            field=models.ManyToManyField(blank=True, related_name='tag', through='foot.NewsTag', to='foot.Tag', verbose_name='タグ'),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='作成日時')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新日時')),
                ('text', models.CharField(max_length=500, verbose_name='コメント')),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='news', to='foot.News')),
            ],
            options={
                'verbose_name': 'コメント',
                'verbose_name_plural': 'コメント',
                'db_table': 'foot_comment',
            },
        ),
    ]
