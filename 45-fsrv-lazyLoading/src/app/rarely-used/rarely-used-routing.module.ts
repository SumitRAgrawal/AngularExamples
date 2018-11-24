import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeavyComponentComponent } from './heavy-component/heavy-component.component';

const routes: Routes = [{
  path: '',
  component : HeavyComponentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RarelyUsedRoutingModule { }
