from rest_framework.generics import ListAPIView
from product_category.models import ProductCategory
from product_category.serializers import ProductCategorySerializer


class ListProductCategoryView(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
