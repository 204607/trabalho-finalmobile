import { NgModule } from '@angular/core';
import { ProjectsPage } from './projects.page';
import { ProjectsPageRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    ProjectsPage,                
    ProjectsPageRoutingModule
  ]
})
export class ProjectsPageModule {}