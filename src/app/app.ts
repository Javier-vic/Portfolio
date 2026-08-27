import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
