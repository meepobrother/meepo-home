import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [];
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
    providers: [],
})
export class HomeModule { }
