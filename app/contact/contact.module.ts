import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContactPage } from './contact.page';
import { ContactPageRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactPage],
  imports: [
    CommonModule,
    IonicModule,
    ContactPageRoutingModule
  ]
})
export class ContactPageModule {}
