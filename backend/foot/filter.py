from django_filters.rest_framework import FilterSet, filters


class NewsFilter(FilterSet):
    tag = filters.Filter(field_name="tag")
