from django.contrib.auth.models import AbstractUser
from django.db import models

from common.models import TimeStampMixin


class User(TimeStampMixin, AbstractUser):
    password = models.CharField('password', max_length=128, blank=False)
    team = models.ForeignKey('foot.Team', null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        verbose_name = u'ユーザ'
        verbose_name_plural = u'ユーザ'
        db_table = 'users_user'


class UserFollowing(TimeStampMixin, models.Model):
    user_id = models.ForeignKey("User", related_name="following", on_delete=models.CASCADE)
    following_user_id = models.ForeignKey("User", related_name="followers", on_delete=models.CASCADE)

    class Meta:
        verbose_name = u'ユーザフォロー'
        verbose_name_plural = u'ユーザフォロー'
        db_table = 'users_user_following'
