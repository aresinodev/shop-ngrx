import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { appReducers } from './stores/app.reducer';
import { EffectsArray } from './stores/effects';
import { getAppConfigProvider } from './util/app-config/app-config.token';
import { ListContainerComponent } from './features/products-list/list-container/list-container.component';
import { CartContainerComponent } from './features/cart/cart-container/cart-container.component';
import { DetailContainerComponent } from './features/product-detail/detail-container/detail-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    CartContainerComponent,
    DetailContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [getAppConfigProvider(environment)],
  bootstrap: [AppComponent]
})
export class AppModule { }
