from django.utils import timezone
from rest_framework import serializers

from .models import News, Comment, Tag
from users.serializer import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'user',
            'username',
            'user_img',
            'news',
            'text',
            'created_at',
            'diff_time'

        )

    user = UserSerializer(default=serializers.CurrentUserDefault())
    username = serializers.CharField(source='user.username', read_only=True)
    user_img = serializers.CharField(source='user.img', read_only=True)
    diff_time = serializers.SerializerMethodField('_get_diff_time', read_only=True)

    def _get_diff_time(self, model):
        try:
            self.comment = model
            diff_date = (timezone.now() - self.comment.created_at)
            if diff_date.days == 0:
                diff_time = int(diff_date.total_seconds() // 60)
                if diff_time < 60:
                    if diff_time == 0:
                        return "１分以内"
                    return str(diff_time) + "分前"
                diff_hour = int(diff_time // 60)
                return str(diff_hour) + "時間前"

            return self.comment.created_at.strftime('%-m月%-d日')

        except Exception:
            return self.comment.created_at.strftime('%-m月%-d日')


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'date',
            'img',
            'url',
            'media',
            'comment',
            'views',
            'diff_time',
            'related_news'
        )

    comment = serializers.SerializerMethodField('_get_news_comment', read_only=True)
    diff_time = serializers.SerializerMethodField('_get_diff_time', read_only=True)
    related_news = serializers.SerializerMethodField('_get_related_news', read_only=True)

    def _get_news_comment(self, model):
        try:
            self.news = model
            query_set = Comment.objects.filter(news_id=self.news.pk).order_by('-created_at')
            return CommentSerializer(query_set, many=True).data

        except Exception:
            return []

    def _get_diff_time(self, model):
        try:
            self.news = model
            diff_date = (timezone.now() - self.news.date)
            if diff_date.days == 0:
                diff_time = int(diff_date.total_seconds() // 60)
                if diff_time < 60:
                    if diff_time == 0:
                        return "１分以内"
                    return str(diff_time) + "分前"
                diff_hour = int(diff_time // 60)
                return str(diff_hour) + "時間前"

            return self.news.date.strftime('%-m月%-d日')

        except Exception:
            return self.news.date.strftime('%-m月%-d日')

    def _get_related_news(self, model):
        try:
            self.news = model
            query_set = News.objects.filter(tag__in=self.news.tag.all()).distinct().exclude(id=self.news.id)[:5]
            return RelatedNewsSerializer(query_set, many=True).data

        except Exception as err:
            return []


class RelatedNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'date',
            'img',
            'url',
            'media',
            'diff_time'
        )

    diff_time = serializers.SerializerMethodField('_get_diff_time', read_only=True)

    def _get_diff_time(self, model):
        try:
            self.news = model
            diff_date = (timezone.now() - self.news.date)
            if diff_date.days == 0:
                diff_time = int(diff_date.total_seconds() // 60)
                if diff_time < 60:
                    if diff_time == 0:
                        return "１分以内"
                    return str(diff_time) + "分前"
                diff_hour = int(diff_time // 60)
                return str(diff_hour) + "時間前"

            return self.news.date.strftime('%-m月%-d日')

        except Exception:
            return self.news.date.strftime('%-m月%-d日')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = (
            'name',
        )
