import graphene
from graphene_django.types import DjangoObjectType
from .models import Ingredient

class IngredientType(DjangoObjectType):
    class Meta:
        model = Ingredient
        
        
class ingredientQuery(graphene.ObjectType):
    allIngredient = graphene.List(IngredientType)
    
    def resolve_allIngredient(self, info, **kwargs):
        return Ingredient.objects.all()
        
class CreateIngredient(graphene.Mutation):
    
    class Arguments:
        name = graphene.String(required=True)
        weight = graphene.Decimal(required=True)
        calorie = graphene.Decimal(required=True)
        protein = graphene.Decimal(required=True)
        lipid = graphene.Decimal(required=True)
        glucid = graphene.Decimal(required=True)
        
    ingredient = graphene.Field(IngredientType)
    success = graphene.Boolean()
    message = graphene.String()
    
    def mutate(self, info, name, weight, calorie, protein, lipid, glucid):
        error = False
        ingredient = None
        
        try:
            ingredient = Ingredient(
                name = name,
                weight = weight,
                calorie = calorie,
                protein = protein,
                lipid = lipid,
                glucid = glucid,
            )
            ingredient.save()
        except:
            error = True
        
        if error:
            message = f"L'opération pour ajouter cet ingrédient a échoué."
        else:
            message = f"{ingredient.name} ajouté avec succès."

            
        return CreateIngredient(success=not error, message=message, ingredient=ingredient )
        
class IngredientMutation(graphene.ObjectType):
    createIngredient = CreateIngredient.Field()
    
schema = graphene.Schema(query = ingredientQuery, mutation=IngredientMutation)
    