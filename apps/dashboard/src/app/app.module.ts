import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component'
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component'
import { TaskDetailsComponent } from './tasks/task-details/task-details.component'
import { MaterialModule } from '@tasklist/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@tasklist/core-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreStateModule } from '@tasklist/core-state';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksListComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
