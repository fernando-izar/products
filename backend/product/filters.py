from django_filters.filterset import FilterSet
from product.models import Product


class ListProductsFilter(FilterSet):
    class Meta:
        model = Product
        fields = {
            "name": ["exact", "icontains"],
            "price": ["exact", "gte", "lte"],
            "product_category": ["exact"],
        }
