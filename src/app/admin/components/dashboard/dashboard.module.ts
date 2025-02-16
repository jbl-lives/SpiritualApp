import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../../app-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { DashCardComponent } from './dash-card/dash-card.component';
import { DashTabComponent } from './dash-tab/dash-tab.component';
import { DashGiftsComponent } from './categories/dash-gifts/dash-gifts.component';
import { DashToolsComponent } from './categories/dash-tools/dash-tools.component';
import { DashboardComponent } from './dashboard.component';
import { DashLeadersComponent } from './categories/dash-leaders/dash-leaders.component';
import { DashUsersComponent } from './categories/dash-users/dash-users.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashLeadersComponent,
    DashNavigationComponent,
    DashCardComponent,
    DashTabComponent,
    DashGiftsComponent,
    DashToolsComponent,
    DashLeadersComponent,
    DashUsersComponent,
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule, 
    ],

  providers: [],
  exports: [
    DashLeadersComponent,
    DashUsersComponent
    // LoginComponent,
    // RegisterComponent
  ]
})
export class DashModule { }