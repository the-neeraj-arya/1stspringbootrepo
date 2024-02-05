import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data = {
    to: "",
    subject: "",
    message: ""
  }
  constructor(private email:EmailService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSend(){
    console.log("Try to send message");
    console.log("Data :-",this.data);
    this.email.sendEmail(this.data).subscribe(
      response=>{
        
       },error=>{
        
      }
    )
  }
}
