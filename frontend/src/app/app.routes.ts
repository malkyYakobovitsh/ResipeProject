import { Routes } from '@angular/router';
import { FavoriteRecipesComponent } from '../components/favorite-recipes/favorite-recipes.component';
import { LogInComponent } from '../components/log-in/log-in.component';
import { ConnectedComponent } from '../components/connected/connected.component';
import { HomeComponent } from '../components/home/home.component';
import { AddRecipyComponent } from '../components/add-recipy/add-recipy.component.js';
import { RecipyDetailsComponent } from '../components/recipy-details/recipy-details.component';
export const routes: Routes = [
   {path:'favoriteRecipes' ,component:FavoriteRecipesComponent},
   {path:'logIn',component:LogInComponent},
   {path:'connect',component:ConnectedComponent},
   {path:'home',component:HomeComponent},
   {path:'addRecipy',component:AddRecipyComponent},
   {path: 'recipyDetails/:id', component: RecipyDetailsComponent },
   {path:'**',component:HomeComponent},
];
