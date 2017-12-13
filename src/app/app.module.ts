import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { DevedorService } from './devedor.service';

import { AppComponent } from './app.component';
import { DevedoresComponent } from './devedores/devedores.component';
import { DevedorDetailComponent } from './devedor-detail/devedor-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DevedoresComponent,
    DevedorDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ DevedorService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
