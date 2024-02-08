from django.urls import path
from .views import ListCreateProductsView, RetrieveUpdateDestroyProductView

urlpatterns = [
    path("product/<pk>/", RetrieveUpdateDestroyProductView.as_view(), name='product-detail'),
    path("products/", ListCreateProductsView.as_view(), name='product-list'),
]
