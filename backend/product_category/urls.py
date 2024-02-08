from django.urls import path
from .views import ListProductCategoryView

urlpatterns = [
    path("product_categories/", ListProductCategoryView.as_view(), name="product_category-list"),
]
