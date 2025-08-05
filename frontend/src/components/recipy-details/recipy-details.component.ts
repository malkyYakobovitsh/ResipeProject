import { Component } from '@angular/core';
import { RecipeInterface } from '../../interfaces/recipyInterface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RecipyService } from '../../app/services/recipy.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../app/services/users.service';
import { AuthServiceService } from '../../app/services/auth-service.service';
import { IdGeneratorServiceService } from '../../app/services/id-generator-service.service';

@Component({
  selector: 'app-recipy-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipy-details.component.html',
  styleUrl: './recipy-details.component.css'
})
export class RecipyDetailsComponent {
  myId: string = "";
  recipe: RecipeInterface = {
    _id: "",
    name: '',
    level: '',
    duration: 0,
    type: '',
    codeUserEnter: "",
    image: {} as ImageData,
    ingredients: [],
  };
  constructor(private myactive: ActivatedRoute, private recipeService: RecipyService, private userService: UserService, private authService: AuthServiceService, private id: IdGeneratorServiceService, private router: Router) {
  }
  ngOnInit() {
    debugger
    console.log(this.recipe.ingredients);

    this.myactive.params.subscribe((l: any) => this.myId = l.id)
    this.recipeService.getRecipyById(this.myId).subscribe((x: any) => this.recipe = x)
  }
  addToFavorites(recipeId: string): void {
    const userId = this.authService.giveid()
    const userData = { _id: this.id.generateId(), FavoriteRecipe: recipeId };
    const checkmark = document.createElement('span');
    this.userService.updateFavoriteRecipe(userId, userData).subscribe(response => {
      alert('המתכון נוסף למועדפים!',);
    }, error => {
      alert('המתכון לא נוסף למעודפים עקב שגיאה בשליחת הנתונים!')
    });
  }
  deleteRecipy(): void {
    this.recipeService.deleteRecipy(this.myId, this.authService.giveid()).subscribe(response => {
      alert('המתכון נמחק בהצלחה!');
      this.router.navigate(['/home']);
    }, error => {
      if (this.authService.giveid() == "") {
        alert("עדיין לא התחברת אתה מועבר לדף ההתחברות!")
        this.router.navigate(['/connect']);
      }
      else
        alert('שגיאה במחיקת המתכון, אנא נסה שוב.');
    });

  }
  printRecipe() {
    window.print();
  }

  downloadRecipe() {
    const element = document.createElement('a');
    const recipeContent = `
    מתכון:${this.recipe.name}
    רמה: ${this.recipe.level}
    משך: ${this.recipe.duration} שעות
    רכיבים:
    ${this.recipe.ingredients.map(ingredient => `${ingredient.ingredientAmount} - ${ingredient.ingredientName}`).join('\n')}
  `;
    const blob = new Blob([recipeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    element.href = url;
    element.download = `${this.recipe.name}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

}