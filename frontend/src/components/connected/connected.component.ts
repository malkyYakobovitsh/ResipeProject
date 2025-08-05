import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/users.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../app/services/auth-service.service';

@Component({
  selector: 'app-connected',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './connected.component.html',
  styleUrl: './connected.component.css'
})
 export class ConnectedComponent {
userName: string="";
password: string="";

constructor(private userService: UserService, private router: Router,private authService: AuthServiceService) {

}

ngOnInit(): void {
this.userName = this.getUserId();
this.password=this.getpass();

}
getUserId(): string {
return localStorage.getItem('userId') || '';
}
getpass():string{
  return localStorage.getItem('pass')||'';
}
checkUser(): void {
if (this.userName) {

  this.userService.getUserById(this.userName, this.password).subscribe(
    response => {
      if (response) {
         this.authService.logIn(); 
            this.authService.theName(this.userName);
        this.authService.theId(this.password)
       this.router.navigate(['/home']);
      } else {
          
        this.router.navigate(['/logIn']);
      }
    },
    error => {
        alert("אתה עדיין לא רשום במערכת , אתה מועבר לדף ההרשמה")
      console.error('Error fetching user:', error);
      this.router.navigate(['/logIn']);
    }
  );
} else {
  
  this.router.navigate(['/logIn']);
}
}
}

