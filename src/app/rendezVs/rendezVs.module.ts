import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { RendezVsRoutingModule } from "./rendezVs-routing.module";

import { RendezVsComponent } from "./rendezVs.component";

@NgModule({
    imports: [
        CommonModule,
        RendezVsRoutingModule,
    ],
    declarations: [
        RendezVsComponent       
    ]
})
export class RendezVsModule { }
