import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PersonnelRoutingModule } from "./personnel-routing.module";

import { PersonnelComponent } from "./personnel.component";

@NgModule({
    imports: [
        CommonModule,
        PersonnelRoutingModule,
    ],
    declarations: [
        PersonnelComponent       
    ]
})
export class PersonnelModule { }
