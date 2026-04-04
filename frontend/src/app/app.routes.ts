import { Routes, RouterModule } from '@angular/router';
import {GundamListComponent} from './components/gundam-list/gundam-list.component';
import {AddGundamComponent} from './components/add-gundam/add-gundam.component';
import {ReportComponent} from './components/report/report.component';
import {EditGundamComponent} from './components/edit-gundam/edit-gundam.component';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';

export const routes: Routes = [
  {path: 'search/:keyword', component: GundamListComponent},
  {path: 'gundams', component: GundamListComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'addGundam', component: AddGundamComponent},
  {path: 'report', component: ReportComponent},
  {path: 'edit/:id', component: EditGundamComponent},
  {path: 'login', component: LoginScreenComponent}
];
