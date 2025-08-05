import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../app/services/users.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../app/services/auth-service.service';
import { IdGeneratorServiceService } from '../../app/services/id-generator-service.service';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
 userForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private userService: UserService,private router:Router,private id:IdGeneratorServiceService) {
    this.userForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      pass: ['', Validators.required],
      address: [''],
      phone: ['', Validators.required],
      manager: [false],
      FavoriteRecipes: [[]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userForm.patchValue({ _id: this.userForm.value.pass});
      this.userService.addUser(this.userForm.value).subscribe(response => {
        console.log('User added:', response);
        this.message = ' ✔ User added successfully!';
        this.router.navigate(['/connect']);
      }, error => {
        console.error('Error adding user:', error);
        this.message = 'Failed to add user. Please try again.';
      });
    }
  }
}