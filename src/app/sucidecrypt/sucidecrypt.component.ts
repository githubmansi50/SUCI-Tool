import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sucidecrypt',
  templateUrl: './sucidecrypt.component.html',
  styleUrls: ['./sucidecrypt.component.css'],
  template: `
      <div *ngFor="let profA of profAdec | async ">
          {{profA.hnprivatekey}}
      </div> 
      `
})
export class SucidecryptComponent implements OnInit {
  title = 'ProfileA Decrypt';
  clearData : string;

  profAdec$ = this.http.get('http://localhost:3000/api/profAdec');

 
  ProfileA = new FormGroup({

    HNKey: new FormControl('', Validators.minLength(256)),
    GetTlv: new FormControl('', Validators.minLength(256))
  });

  get HNKey(): any { 
    return this.ProfileA.get('HNKey'); 
  }
  
  get GetTlv(): any { 
    return this.ProfileA.get('GetTlv'); 
  }

  clear() { 
    this.HNKey.reset(); 
    this.GetTlv.reset(); 
  }
  
  setValue() { 
    this.ProfileA.setValue({HNKey: 'F1AB1074477EBCC7F554EA1C5FC368B1616730155E0041AC447D6301975FECDA', GetTlv: 'A1360100F110F0FF0201039AAB8376597021E855679A9778EA0B67396E68C66DF32C0F41E9ACCA2DA9B9D146A33FC2716AC7DAE96AA3OA4D'}); 
  }
  


  get f(){
    return this.ProfileA.value;
  }
  calculate(){

  }
  clearall(){
    this.HNKey.reset(); 
    this.GetTlv.reset(); 
  }

  close(){

  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
