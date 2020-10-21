import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as json from 'api/db.json'

// declare module '*.json' {
//   const value: any;
//   export default value;
// }

@Component({
  selector: 'app-sucidecrypt',
  templateUrl: './sucidecrypt.component.html',
  styleUrls: ['./sucidecrypt.component.css'],
  template: `
      <div *ngFor="let profB of profBdec | async ">
          {{profB.hnprivatekey}}
      </div> 
      `
})
export class SucidecryptComponent implements OnInit {
  title = 'ProfileB Decrypt';
  clearData: string;

  profBdec$ = this.http.get('http://localhost:3000/api/profBdec');

  ProfileB = new FormGroup({

    HNKey: new FormControl('', Validators.minLength(256)),
    GetTlv: new FormControl('', Validators.minLength(256)),

  });

  ProfileB_Response = new FormGroup({

    SUPI_Format: new FormControl('', Validators.minLength(256))

  });

  get HNKey(): any {
    return this.ProfileB.get('HNKey');
  }

  get GetTlv(): any {
    return this.ProfileB.get('GetTlv');
  }

  get SUPI_Format(): any {
    return this.ProfileB_Response.get('SUPI_Format');
  }


  clear() {
    this.HNKey.reset();
    this.GetTlv.reset();
  }

  setValue() {
    this.ProfileB.setValue({

      HNKey: 'F1 AB 10 74 47 7E BC C7 F5 54 EA 1C 5F C3 68 B1 61 67 30 15 5E 00 41 AC 44 7D 63 01 97 5F EC DA',
      GetTlv: 'A1 36 01 00 F1 10 F0 FF 02 01 03 9A AB 83 76 59 70 21 E8 55 67 9A 97 78 EA 0B 67 39 6E 68 C6 6D F3 2C 0F 41 E9 AC CA 2D A9 B9 D1 46 A3 3F C2 71 6A C7 DA E9 6A A3 OA 4D'

    });
  }

  su: any;

  get f() {
    return this.ProfileB.value;
  }
  calculate() {
    console.log(json.profBdec);
    //this.su = json.profBdec['0'].SUPI_Format;
    //console.log(this.su);
  }
  clearall() {
    this.HNKey.reset();
    this.GetTlv.reset();
  }

  close() {

  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
