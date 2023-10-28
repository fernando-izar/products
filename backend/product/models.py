from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    color = models.CharField(max_length=200)
    product_category = models.ForeignKey(
        "product_category.ProductCategory",
        on_delete=models.CASCADE,
        related_name="products",
    )
    price = models.DecimalField(max_digits=20, decimal_places=2)

    class Meta:
        db_table = "product"

    def __str__(self):
        return self.name
