import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SUCI-Tool';
  profBdec$ = this.http.get('/api/profBdec');

  constructor(private http: HttpClient) { }
}
