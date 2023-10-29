from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from product.models import Product
from product.serializers import ProductSerializer
from product.filters import ListProductsFilter
from django_filters import rest_framework as filters


class ListCreateProductsView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ListProductsFilter


class RetrieveUpdateDestroyProductView(RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
