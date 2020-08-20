from django.db import models

from common.models import TimeStampMixin
from users.models import User


class League(models.Model):
    name = models.CharField("リーグ名", blank=False,
                            null=False, max_length=100, unique=True)

    class Meta:
        verbose_name = u'リーグ名'
        verbose_name_plural = u'リーグ名'
        db_table = 'foot_league'


class Team(models.Model):
    name = models.CharField("チーム名", null=False, blank=False, max_length=100)
    league = models.ForeignKey(
        League, verbose_name="所属リーグ", null=False, blank=False, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('name', 'league')
        verbose_name = u'チーム'
        verbose_name_plural = u'チーム'
        db_table = 'foot_team'


class Player(models.Model):
    name = models.CharField("名前", null=False, blank=False, max_length=100)
    team = models.ForeignKey(
        Team, null=False, blank=False, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('name', 'team')
        verbose_name = u'プレイヤー'
        verbose_name_plural = u'プレイヤー'
        db_table = 'foot_player'


class Tag(models.Model):
    name = models.CharField(u'タグ名', max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = u'タグ'
        verbose_name_plural = u'タグ'
        db_table = 'foot_tag'


class News(models.Model):
    title = models.CharField("タイトル", max_length=200, null=False, blank=False)
    date = models.DateTimeField("掲載日時", null=True, blank=True)
    body = models.CharField("本文", max_length=5000,
                            null=False, blank=False, default=None)
    url = models.URLField("URL", null=False, blank=False,
                          default=None, unique=True)
    img = models.CharField("イメージ", null=True, blank=True,
                           default=None, max_length=200)
    media = models.CharField("掲載メディア", max_length=100,
                             null=False, blank=False, default=None)
    tag = models.ManyToManyField(Tag,
                                 through='NewsTag',
                                 through_fields=('news', 'tag'),
                                 verbose_name='タグ', blank=True,
                                 related_name='tag')
    public = models.BooleanField("公開", default=True, blank=False, null=False)
    views = models.PositiveIntegerField("閲覧数", default=0)

    def tags(self):
        return ",".join([str(p) for p in self.tag.all()])

    def __str__(self):
        return "%s" % self.title

    class Meta:
        verbose_name = u'記事'
        verbose_name_plural = u'記事'
        db_table = 'foot_news'


class Comment(TimeStampMixin, models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE, related_name='comment')
    text = models.CharField("コメント", max_length=500)
    news = models.ForeignKey(News, null=False, blank=False, on_delete=models.CASCADE, related_name='news')

    class Meta:
        verbose_name = u'コメント'
        verbose_name_plural = u'コメント'
        db_table = 'foot_comment'


# 中間テーブル
class NewsTag(models.Model):
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return "%s" % self.news

    class Meta:
        unique_together = ('news', 'tag')
        verbose_name = u'記事・タグ'
        verbose_name_plural = u'記事・タグ'
        db_table = 'foot_news_tag'
