import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../app/services/auth-service.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../app/services/users.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,CommonModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  favoriteRecipeNames: string[] = [];
  constructor(public authService: AuthServiceService ,private userService:UserService) {
 
 
  }
logOut(){
  this.authService.logOut()
}
givLike(){
  const userId = this.authService.giveid()
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
