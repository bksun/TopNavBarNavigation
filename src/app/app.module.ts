import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routeConfig: Routes = [
  {
      path: 'Home',
      component: HomeComponent
  },
  {
      path: 'Services',
      component: ServicesComponent
  },
  {
    path: 'Products',
    component: ProductsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
      path: '',
      redirectTo: '/Home',
      pathMatch: 'full'
  },
  {
      path: '**', 
      component: PageNotFoundComponent,
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
