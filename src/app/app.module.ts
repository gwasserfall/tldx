import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EstimationPipe } from './@shared/estimation.pipe';
import { TasksService } from './@shared/tasks.service';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { TasksComponent } from './tasks/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CalendarComponent,
    EstimationPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
