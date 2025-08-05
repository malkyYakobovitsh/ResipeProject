import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/users.service';
import { AuthServiceService } from '../../app/services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-favorite-recipes',
   imports: [FormsModule,CommonModule],
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent implements OnInit {
  favoriteRecipeNames: string[] = [];

  constructor(private userService: UserService,private auth:AuthServiceService) {}
  ngOnInit(): void {
    const userId = this.auth.giveid()
    this.userService.getFavoriteRecipeNames(userId).subscribe(
      (recipeNames) => {
        this.favoriteRecipeNames = recipeNames; 
      },
      (error) => {
        console.log(error);
      }
    );
  }
}