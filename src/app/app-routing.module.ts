import { ModalComponent } from './shared/modal/modal.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { CartComponent } from './pages/cart/cart.component';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BrowseComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'demo', component: ModalComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    //TODO: remove {} property for lazy loading
    //TODO: in this case it'll load all the modules
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
