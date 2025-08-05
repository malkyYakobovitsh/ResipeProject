export interface UserInterface {
     _id: number;
    name: string;
    pass: string;
    address?: string; 
    phone: number;
    manager?: boolean; 
    FavoriteRecipes: Array<{
        _id: string;
        FavoriteRecipe: string; 
    }>;
}
