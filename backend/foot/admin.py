from django.contrib import admin

from .models import News, Tag


class TagInline(admin.TabularInline):
    model = News.tag.through


@admin.register(News)
class imgAdmin(admin.ModelAdmin):
    list_display = ('title', 'public', 'tags')
    inlines = [
        TagInline,
    ]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    inlines = TagInline,
    exclude = ('tag',)
