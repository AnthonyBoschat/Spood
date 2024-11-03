import graphene
from Ingredient.schema import IngredientMutation, ingredientQuery

class Query(ingredientQuery, graphene.ObjectType):
    pass

class Mutation(IngredientMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)