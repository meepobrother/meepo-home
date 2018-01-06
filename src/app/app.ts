import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeRootComponent } from './home-root/home-root';
import { HomeIndexComponent } from './home-index/home-index';
import { StoreModule } from 'meepo-store';
const HomeComponents = [
    HomeIndexComponent,
    HomeRootComponent
]

let routes: Routes = [{
    path: 'home/index',
    component: HomeIndexComponent
}];

import { IconsModule } from 'meepo-icons';
import { AddressModule } from 'meepo-address';

@NgModule({
    declarations: [
        ...HomeComponents
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IconsModule,
        StoreModule,
        AddressModule
    ],
    exports: [
        ...HomeComponents
    ],
    providers: [],
})
export class HomeModule { }
