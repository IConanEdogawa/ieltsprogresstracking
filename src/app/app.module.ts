import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './pages/componants/header/header.component';
import { FooterComponent } from './pages/componants/footer/footer.component';
import { SidebarComponent } from './pages/componants/sidebar/sidebar.component';
import { GraphComponent } from './pages/componants/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
