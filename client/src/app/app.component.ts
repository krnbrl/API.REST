import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
})
export class AppComponent implements OnInit {
  public title = 'Prueba Tecnica';
  public user: User; 
  public identity = true;
  public token;

  constructor(
    private _userServide: UserService,
  ){
    this.user = new User('', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(){
    
  }

  public onSubmit(){
    console.log(this.user);

    this._userServide.singUp(this.user).subscribe(
      Response => {
        console.log(Response);
      }, error => {
        var message_err = <any>error;

        if(message_err != null){
          console.log(error);
        }

      }
    );
  }

}
