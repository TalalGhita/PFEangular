import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PlanificationRoutingModule } from "./planification-routing.module";

import { PlanificationComponent } from "./planification.component";

@NgModule({
    imports: [
        CommonModule,
        PlanificationRoutingModule,
    ],
    declarations: [
        PlanificationComponent       
    ]
})
export class PlanificationModule { }
