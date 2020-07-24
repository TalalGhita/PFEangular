import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProjetRoutingModule } from "./projet-routing.module";

import { ProjetComponent } from "./projet.component";

@NgModule({
    imports: [
        CommonModule,
        ProjetRoutingModule,
    ],
    declarations: [
        ProjetComponent       
    ]
})
export class ProjetModule { }
