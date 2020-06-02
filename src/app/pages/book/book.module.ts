import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [BookComponent],
})
export class BookModule {}
