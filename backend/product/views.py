from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from product.models import Product
from product.serializers import ProductSerializer


class ListCreateProductsView(ListCreateAPIView):
    serializer_class = ProductSerializer
    filter_fields = ("name", "price", "category")
    queryset = Product.objects.all()


class RetrieveUpdateDestroyProductView(RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
