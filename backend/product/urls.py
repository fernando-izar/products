from django.urls import path
from .views import ListCreateProductsView, RetrieveUpdateDestroyProductView

urlpatterns = [
    path("product/<pk>/", RetrieveUpdateDestroyProductView.as_view()),
    path("products/", ListCreateProductsView.as_view()),
]
