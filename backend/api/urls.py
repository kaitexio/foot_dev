from django.urls import path, include
from rest_framework_nested import routers
from foot.views import NewsViewSet, CommentViewsSet, RankingViewSet, TagViewSet, TrendViewSet
from users.views import UserViewSet

router = routers.SimpleRouter()
router.register(r'news', NewsViewSet)
router.register(r'users', UserViewSet)
router.register(r'tag', TagViewSet)

news_router = routers.NestedSimpleRouter(
    router, r'news', lookup='news'
)
news_router.register(r'comment', CommentViewsSet)

urlpatterns = [
    path(r'', include(router.urls)),
    path(r'', include(news_router.urls)),
    path(r'news/ranking', RankingViewSet.as_view()),
    path(r'news/trend', TrendViewSet.as_view())
]
