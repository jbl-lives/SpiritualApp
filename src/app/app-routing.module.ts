import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentsComponent } from './features/home-components/home-components.component';
import { ToolsComponentComponent } from './features/tools-component/tools-component.component';
import { LeadersPageComponent } from './features/leaders-page/leaders-page.component';


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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
