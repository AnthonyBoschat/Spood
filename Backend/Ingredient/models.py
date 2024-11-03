from django.db import models

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)
    weight = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    calorie = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    protein = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    lipid = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    glucid = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    
    def __str__(self):
        return self.name
