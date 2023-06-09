import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
// import interactionPluging from '@fullcalendar/interaction'
// import daygridPluging from '@fullcalendar/daygrid';
import { ReportComponent } from './modules/apps/chat/report/report.component';
import { CalendarComponent } from './modules/apps/chat/calendar/calendar.component';import { FullCalendarModule } from '@fullcalendar/angular';


// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './modules/apps/chat/to-do/to-do.component';
import { MeetingComponent } from './modules/apps/chat/meeting/meeting.component';

// #fake-end#

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      //@ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent, ReportComponent, CalendarComponent, ToDoComponent, MeetingComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    FullCalendarModule,
    ClipboardModule,
    FormsModule,

    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
