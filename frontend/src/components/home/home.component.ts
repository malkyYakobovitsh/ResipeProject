import { Component } from '@angular/core';
import { RecipeInterface } from '../../interfaces/recipyInterface';
import { RecipyService } from '../../app/services/recipy.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router,  RouterModule } from '@angular/router';
import { AuthServiceService } from '../../app/services/auth-service.service';
import { UserService } from '../../app/services/users.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
recipes: RecipeInterface[] = [];
 favoriteRecipeNames: string[] = [];

  constructor(private recipyService: RecipyService,private router:Router,private authService: AuthServiceService ,private userService:UserService) { }

  ngOnInit(): void {
    this.getAllRecipys();
  }

  getAllRecipys(): void {
  this.recipyService.getAllRecipys().subscribe(
    (data: RecipeInterface[]) => {
      this.recipes = data;
      console.log(this.recipes); 
    },
    (error) => {
      console.error('Error fetching recipes', error);
    }
  );
}
rout(recipyId:string){
  debugger
  if(!this.authService.isLoggedIn()){
alert("התחבר כדי לראות פרטים נוספים, הנך מועבר להתחברות")
this.router.navigate(['/connect'])
  }
  else
 this.router.navigate(['/recipyDetails',recipyId]);
}

}
