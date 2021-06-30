import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserDataService } from '../../services/user-data.service'
import { users } from '../../models/users'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogLogin, {
      width: '600px',
    });
  }
  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./login.component.scss'],
})
export class DialogLogin {
  hide = true;
  wrongPassword = false;
  alreadyRegistered = false;
  usersDB: any
  firstNameInput = '';
  lastNameInput = '';
  emailInput = '';
  passwordInput = '';
  control = new FormControl('', Validators.required);

  constructor(
    public userData: UserDataService,
    public dialogRef: MatDialogRef<DialogLogin>,
    public login: LoginComponent,
    ) { }

  openDialog(){
      this.login.openDialog()
    }

  closeDialog() {
    this.dialogRef.close();
  }

  logIn(){
    for(let user of users){
      if(this.emailInput === user.email){
        if(this.passwordInput === user.password){
          this.userData.isLogged = true;
          this.userData.loggedInUser.firstName = user.firstName;
          this.userData.loggedInUser.lastName = user.lastName;
          this.userData.loggedInUser.email = user.email;
          this.wrongPassword = false;
          this.closeDialog()
          return
        } 
      }
    }
    this.wrongPassword = true
  }

}
