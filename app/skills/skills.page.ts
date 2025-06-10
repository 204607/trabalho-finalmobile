import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
  standalone: false,
})
export class SkillsPage {

  skills = [
    { nome: 'HTML', nivel: 50 },
    { nome: 'CSS', nivel: 42 },
    { nome: 'JavaScript', nivel: 25 },
    { nome: 'Angular', nivel: 20 },
    { nome: 'Ionic', nivel: 42 },
    { nome: 'Git/GitHub', nivel: 40 },
  ];

  constructor() { }

}
