from rest_framework import pagination


class RankingPagination(pagination.PageNumberPagination):
    page_size = 5
