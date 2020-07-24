import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MaterielRoutingModule } from "./materiel-routing.module";

import { MaterielComponent } from "./materiel.component";

@NgModule({
    imports: [
        CommonModule,
        MaterielRoutingModule,
    ],
    declarations: [
        MaterielComponent      
    ]
})
export class MaterielModule { }
