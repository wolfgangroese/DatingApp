import { AccountService } from './../_services/account.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any ={};

  constructor(private AccountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.AccountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log("cancel button clicked");
      }
}
