export interface RecipeInterface{
    _id: string;
    name: string;
    level?: string; 
    duration?: number; 
    type: string;
    codeUserEnter?: string; 
    image:ImageData;
    ingredients: Array<{
          _id:String;
        ingredientName: string;
        ingredientAmount: string;
    }>;
}