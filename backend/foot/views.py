from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, generics, status, filters
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import News, Comment, Tag
from .paginations import RankingPagination
from .serializer import NewsSerializer, CommentSerializer, TagSerializer

import logging

logger = logging.getLogger(__name__)


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.filter(public=True)
    serializer_class = NewsSerializer
    permission_classes = (AllowAny,)
    filter_backends = [filters.OrderingFilter,
                       filters.SearchFilter,
                       DjangoFilterBackend]
    search_fields = ['tag__name']
    ordering_fields = ['date']
    ordering = ['-date']
    filterset_fields = ['tag__name']

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views += 1
        instance.save(update_fields=["views"])
        return super().retrieve(request, *args, **kwargs)


class CommentViewsSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def create(self, request, *args, **kwargs):
        try:
            if hasattr(request.data, '_mutable'):
                request.data._mutable = True
            if kwargs.get('news_pk'):
                request.data["news"] = kwargs.get('news_pk')
                return super().create(request, *args, **kwargs)

            return Response(status=status.HTTP_400_BAD_REQUEST)

        except Exception as err:
            logger.exception(err)
            return Response(status=status.HTTP_400_BAD_REQUEST)


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class RankingViewSet(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    pagination_class = RankingPagination
    filter_backends = [filters.OrderingFilter,
                       DjangoFilterBackend]
    ordering_fields = ['views']
    ordering = ['-views']


class TrendViewSet(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def list(self, request, *args, **kwargs):
        tag_list = list(News.objects.order_by("-date")[:5].values_list('tag', flat=True))
        queryset = Tag.objects.filter(id__in=tag_list).order_by("name")
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
