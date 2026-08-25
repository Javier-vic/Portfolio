import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
