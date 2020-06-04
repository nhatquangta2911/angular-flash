import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [AlertComponent, ModalComponent],
})
export class SharedModule {}
