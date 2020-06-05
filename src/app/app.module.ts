import { ModalComponent } from './shared/modal/modal.component';
import { BookCardComponent } from './pages/browse/book-card/book-card.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { CartComponent } from './pages/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './pages/book/book.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CartComponent,
    ShippingComponent,
    BrowseComponent,
    ModalComponent,
    BookCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BookModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
