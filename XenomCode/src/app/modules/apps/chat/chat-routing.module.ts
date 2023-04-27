import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { DrawerChatComponent } from './drawer-chat/drawer-chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ReportComponent } from './report/report.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      {
        path: 'private-chat',
        component: PrivateChatComponent,
      },
      {
        path: 'group-chat',
        component: GroupChatComponent,
      },
      {
        path: 'drawer-chat',
        component: DrawerChatComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path: 'to-do',
        component: ToDoComponent,
      },

      { path: '', redirectTo: 'private-chat', pathMatch: 'full' },
      { path: '**', redirectTo: 'private-chat', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
