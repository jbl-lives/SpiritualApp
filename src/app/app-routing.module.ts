import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentsComponent } from './features/home-components/home-components.component';
import { LeadersPageComponent } from './features/pages/leaders-page/leaders-page.component';
import { GiftsPageComponent } from './features/pages/gifts-page/gifts-page.component';
import { InformationPageComponent } from './features/information-page/information-page.component';
import { ToolsPageComponent } from './features/pages/tools-page/tools-page.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponentsComponent

  },
  
  {
    path: "leaders-page",
    component: LeadersPageComponent
  },
  {
    path: "gifts-page",
    component: GiftsPageComponent
  }
  , 
  {
    path: "information",
    component: InformationPageComponent
  },
  {
    path: "tools-page",
    component: ToolsPageComponent
  },
  {
    path: "information-page",
    component: InformationPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
