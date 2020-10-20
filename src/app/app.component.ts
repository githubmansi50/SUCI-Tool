import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SUCI-Tool';
  profAdec$ = this.http.get('/api/profAdec');

   constructor(private http: HttpClient) {}
}
