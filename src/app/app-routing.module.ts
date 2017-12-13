import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevedoresComponent } from './devedores/devedores.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DevedorDetailComponent }  from './devedor-detail/devedor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DevedorDetailComponent },
  { path: 'devedores', component: DevedoresComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
