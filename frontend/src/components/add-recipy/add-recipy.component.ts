import { Component } from '@angular/core';
import { RecipyService } from '../../app/services/recipy.service';
import { RecipeInterface } from '../../interfaces/recipyInterface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../app/services/auth-service.service';
import { IdGeneratorServiceService } from '../../app/services/id-generator-service.service';

@Component({
  selector: 'app-add-recipy',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-recipy.component.html',
  styleUrl: './add-recipy.component.css'
})
export class AddRecipyComponent {
  
 recipe: RecipeInterface = {
    _id: "",
    name: '',
    level: '',
    duration: 0,
    type: '',
    codeUserEnter:"",
    image: {} as ImageData,
    ingredients: [],
  };

  constructor(public authService: AuthServiceService,private recipyService: RecipyService,private idGenerator: IdGeneratorServiceService) {
this.recipe.codeUserEnter=this.authService.giveid()
this.recipe._id = this.idGenerator.generateId();
  }

  addRecipe() {
    this.recipyService.addRecipy(this.recipe).subscribe(response => {
      alert(" ✔ המתכון נוסף לרשימת המכונים בהצלחה")
    }, error => {
       alert("בעיה בשליחת הנתונים המתכון לא נשמר")
    });
  }

  addIngredient(ingredientName: string, ingredientAmount: string) {
    const _id=this.idGenerator.generateId()
    this.recipe.ingredients.push({ _id,ingredientName, ingredientAmount });
  }
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.recipe.image = e.target.result; 
      };
      reader.readAsDataURL(file);
    }
  }
}