import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendezVsComponent } from './rendezVs.component';

const routes: Routes = [
  {
    path: '',
    component: RendezVsComponent,
    data: {
      title: 'RendezVs'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RendezVsRoutingModule { }
