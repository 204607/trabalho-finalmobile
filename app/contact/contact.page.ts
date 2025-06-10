import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ContactPage {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private toastController: ToastController) {}

  async submitForm() {
    this.name = '';
    this.email = '';
    this.message = '';

    const toast = await this.toastController.create({
      message: 'Mensagem enviada com sucesso!',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });

    toast.present();
  }
}
