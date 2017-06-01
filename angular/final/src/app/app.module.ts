import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarPipe } from './calendar/calendar.pipe';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarService } from './calendar/calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarPipe,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
