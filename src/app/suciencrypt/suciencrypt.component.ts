import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suciencrypt',
  templateUrl: './suciencrypt.component.html',
  styleUrls: ['./suciencrypt.component.css']
})
export class SuciencryptComponent implements OnInit {
  title = 'ProfileA Encrypt';
  hnprivate: boolean=true;
  //  encryptMode: boolean=true;
  //publiKeyLabel:boolean;
  //Modevalidator:string;
  //conversionOutput: string;
  //conversionOutput2: string;
  //isShown:boolean = true;
  url='http://localhost:8080';


  constructor() { }

  ngOnInit(): void {
  }

}
