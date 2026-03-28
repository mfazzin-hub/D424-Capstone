import { Routes, RouterModule } from '@angular/router';
import {GundamListComponent} from './components/gundam-list/gundam-list.component';

export const routes: Routes = [
  {path: 'search/:keyword', component: GundamListComponent},
  {path: 'gundams', component: GundamListComponent},
  {path: '', redirectTo: '/gundams', pathMatch: 'full'}

];
