import { cartReducer } from './pages/cart/cart.reducer';
import { bookReducer } from './pages/book/book.reducer';
import { ModalComponent } from './shared/modal/modal.component';
import { BookCardComponent } from './pages/browse/book-card/book-card.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { CartComponent } from './pages/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BookModule,
    StoreModule.forRoot({ book: bookReducer, cart: cartReducer }),
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
