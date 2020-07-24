import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterielComponent } from './materiel.component';

const routes: Routes = [
  {
    path: '',
    component: MaterielComponent,
    data: {
      title: 'Materiel'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterielRoutingModule { }
