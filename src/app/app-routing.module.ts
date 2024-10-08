import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentsComponent } from './features/home-components/home-components.component';
import { ToolsComponentComponent } from './features/tools-component/tools-component.component';
import { LeadersPageComponent } from './features/leaders-page/leaders-page.component';
import { GiftsPageComponent } from './features/gifts-page/gifts-page.component';
import { InformationPageComponent } from './features/information-page/information-page.component';
import { ToolsPageComponent } from './features/pages/tools-page/tools-page.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponentsComponent

  },
  {
    path: "tools",
    component: ToolsComponentComponent
  },
  {
    path: "leaders",
    component: LeadersPageComponent
  },
  {
    path: "gifts",
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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
