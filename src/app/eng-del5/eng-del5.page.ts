import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eng-del5',
  templateUrl: './eng-del5.page.html',
  styleUrls: ['./eng-del5.page.scss'],
})
export class EngDel5Page implements OnInit {

  status: boolean = false;
  choose: any = '';
  constructor() { }

  ngOnInit() {
  }

  chooseMap(){
    this.status = !this.status; 

    if(this.status == true)
    {
      this.choose = 'chosen';
    } else { this.choose = ''; }

    console.log(this.status);      
}



}
