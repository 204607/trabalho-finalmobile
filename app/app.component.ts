import { Component } from '@angular/core';

@Component({
  standalone: false, 
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sobre mim', url: '/sobre', icon: 'person' },
    { title: 'Habilidades', url: '/habilidades', icon: 'bar-chart' },
    { title: 'Projetos', url: '/projects', icon: 'briefcase' },
    { title: 'Contato', url: '/contato', icon: 'mail' }
  ];

  constructor() {}
}