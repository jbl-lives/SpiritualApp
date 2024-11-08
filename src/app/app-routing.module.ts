import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentsComponent } from './features/home-components/home-components.component';
import { LeadersPageComponent } from './features/pages/leaders-page/leaders-page.component';
import { GiftsPageComponent } from './features/pages/gifts-page/gifts-page.component';
import { InformationPageComponent } from './features/information-page/information-page.component';
import { ToolsPageComponent } from './features/pages/tools-page/tools-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsPageComponent } from './features/pages/about-us-page/about-us-page.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';




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
    path: "about-page",
    component: AboutUsPageComponent
  }
  ,
  {
    path: "login-page",
    component: LoginComponent
  }
  ,
  {
    path: "register-page",
    component: RegisterComponent
  }
  ,
  {
    path: "dashboard-page",
    component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
