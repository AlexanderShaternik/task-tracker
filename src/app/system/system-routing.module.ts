import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {MainPageComponent} from './main-page/main-page.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'main', component: MainPageComponent},
      {path: 'settings', component: SettingsPageComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
