import { CartComponent } from './pages/cart/cart.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BookModule } from './pages/book/book.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
@NgModule({
  declarations: [AppComponent, TopBarComponent, CartComponent],
  imports: [BrowserModule, HomeModule, BookModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
