from rest_framework.serializers import ModelSerializer, SerializerMethodField
from product.models import Product
from product_category.models import ProductCategory


class ProductSerializer(ModelSerializer):
    promotional_price = SerializerMethodField()

    def get_promotional_price(self, obj):
        discount = ProductCategory.objects.get(id=obj.product_category.id).discount
        price_after_discount = obj.price - (obj.price * discount / 100)
        return round(price_after_discount, 2)

    class Meta:
        model = Product
        fields = "__all__"
