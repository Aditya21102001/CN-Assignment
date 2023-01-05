import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './Components/events/events.component';
import { CardComponent } from './Components/card/card.component';
import { TagsComponent } from './Components/tags/tags.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AllEventComponent } from './Components/all-event/all-event.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ModalComponent } from './Components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AllEventComponent,
    EventsComponent,
    CardComponent,
    TagsComponent,
    FooterComponent,
    NavbarComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
