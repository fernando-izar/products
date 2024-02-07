from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from product.models import Product
from product.serializers import ProductSerializer
from product.filters import ListProductsFilter
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter


class ListCreateProductsView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.DjangoFilterBackend, SearchFilter,)
    filterset_class = ListProductsFilter

    search_fields = ['name', 'description', 'color', 'product_category__name' ]


class RetrieveUpdateDestroyProductView(RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
