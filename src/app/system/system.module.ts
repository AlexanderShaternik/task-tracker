import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import {SystemComponent} from './system.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './main-page/list/list.component';
import { TaskComponent } from './main-page/task/task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './main-page/list/header/header.component';
import {NewTaskComponent} from './main-page/list/header/new-task/new-task.component';



@NgModule({
  declarations: [MainPageComponent, SettingsPageComponent, SystemComponent,
  SidebarComponent, ListComponent, TaskComponent, HeaderComponent, NewTaskComponent],
  imports: [CommonModule, SystemRoutingModule, FormsModule, ReactiveFormsModule]
})

export class SystemModule {

}
