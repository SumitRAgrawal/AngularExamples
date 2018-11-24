import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RarelyUsedRoutingModule } from './rarely-used-routing.module';
import { HeavyComponentComponent } from './heavy-component/heavy-component.component';

@NgModule({
  imports: [
    CommonModule,
    RarelyUsedRoutingModule
  ],
  declarations: [HeavyComponentComponent]
})
export class RarelyUsedModule { }
