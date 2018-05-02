import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserComponent } from './user/user.component';
import { LocationComponent } from './location/location.component';

import { UserService } from './user.service';
import { TeacherService } from './teacher.service';
import { ParentService } from './parent.service';
import { LocationService } from './location.service';
import { InstrumentService } from './instrument.service';

const routes: Routes = [
  { path: '', component: InstrumentComponent, pathMatch: 'full' },
  { path: 'instrument', component: InstrumentComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'user', component: UserComponent },
  { path: 'location', component: LocationComponent }];


@NgModule({
  declarations: [
    AppComponent,
    InstrumentComponent,
    ParentComponent,
    TeacherComponent,
    UserComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    UserService,
    TeacherService,
    ParentService,
    LocationService,
    InstrumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
