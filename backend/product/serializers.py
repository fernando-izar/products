from rest_framework.serializers import ModelSerializer, SerializerMethodField
from product.models import Product
from product_category.models import ProductCategory


class ProductSerializer(ModelSerializer):
    promotional_price = SerializerMethodField()
    product_category_name = SerializerMethodField()

    def get_promotional_price(self, obj):
        discount = ProductCategory.objects.get(id=obj.product_category.id).discount
        price_after_discount = obj.price - (obj.price * discount / 100)
        return round(price_after_discount, 2)

    def get_product_category_name(self, obj):
        return ProductCategory.objects.get(id=obj.product_category.id).name

    class Meta:
        model = Product
        fields = "__all__"
