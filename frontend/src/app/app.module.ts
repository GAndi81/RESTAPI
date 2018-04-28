import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserComponent } from './user/user.component';
import { LocationComponent } from './location/location.component';

import { UserService } from './user.service';

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
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
