import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApp';
  user="Hasso";
  items = [{description:"Kahvaltı",action:"No"},
    {description:"Spor",action:"No"},
    {description:"Oyun",action:"Yes"},
    {description:"Sinema",action:"No"}];
}
