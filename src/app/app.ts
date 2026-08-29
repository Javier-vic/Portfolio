import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Header } from './components/header/header';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Header, Experience, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
