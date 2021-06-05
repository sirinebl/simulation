import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimulationComponent } from './simulation/simulation.component';
import { DesignComponent } from './design/design.component';
import { SiteServeyComponent } from './site-servey/site-servey.component';
import { RapportsComponent } from './rapports/rapports.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainNavComponent },
  { path: 'siteservey', component: SiteServeyComponent },
  { path: 'simulation' , component : SimulationComponent},
  { path: '3D-design' ,  component: DesignComponent },
  { path: 'rapports' , component: RapportsComponent },
  { path: 'login' , component: LoginComponent },



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

