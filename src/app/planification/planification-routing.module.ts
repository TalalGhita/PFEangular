import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanificationComponent } from './planification.component';

const routes: Routes = [
  {
    path: '',
    component: PlanificationComponent,
    data: {
      title: 'Planification'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanificationRoutingModule { }
