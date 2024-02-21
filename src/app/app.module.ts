import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componetnts/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componetnts/menu-title/menu-title.component';
import { BigBoxComponent } from './componetnts/big-box/big-box.component';
import { SmallBoxComponent } from './componetnts/small-box/small-box.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigBoxComponent,
    SmallBoxComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
