from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class ProductCategory(models.Model):
    name = models.CharField(max_length=200)
    discount = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        validators=[MinValueValidator(0), MaxValueValidator(100)],
    )

    class Meta:
        db_table = "product_category"

    def __str__(self):
        return self.name
