import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Header } from './components/header/header';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Header, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
