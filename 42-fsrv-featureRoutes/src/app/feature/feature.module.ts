import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdRouteComponent } from './third-route/third-route.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature',
    component: ThirdRouteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThirdRouteComponent]
})
export class FeatureModule { }
