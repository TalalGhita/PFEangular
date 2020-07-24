import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TacheRoutingModule } from "./tache-routing.module";

import { TacheComponent } from "./tache.component";

@NgModule({
    imports: [
        CommonModule,
        TacheRoutingModule,
    ],
    declarations: [
        TacheComponent       
    ]
})
export class TacheModule { }
