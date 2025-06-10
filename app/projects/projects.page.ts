import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class ProjectsPage {
  projetoSelecionado: any = null;

  projetos = [
    {
      titulo: 'PWA ADS UPF',
      descricao: 'PWA desenvolvido com HTML, JS e CSS.',
      link: 'https://github.com/seuusuario/pwa-ads-upf'
    },
    {
      titulo: 'TODO List',
      descricao: 'Aplicativo de lista de tarefas desenvolvido com Ionic.',
      link: 'https://github.com/seuusuario/todo-list'
    },
    {
      titulo: 'Personal APP',
      descricao: 'Aplicativo pessoal com navegação e menu lateral.',
      link: 'https://github.com/seuusuario/personal-app'
    }
  ];

  verProjeto(projeto: any) {
    this.projetoSelecionado = projeto;
  }

  voltar() {
    this.projetoSelecionado = null;
  }
}