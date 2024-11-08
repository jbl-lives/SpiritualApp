import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



import { NavigationComponent } from './core/header/navigation/navigation.component';
import { LandingPageComponent } from './features/home-components/landing-page/landing-page.component';
import { IntroBannerComponent } from './shared/intro-banner/intro-banner.component';
import { JourneyCardComponent } from './features/home-components/journey-card/journey-card.component';
import { ContentBoxComponent } from './features/home-components/journey-card/content-box/content-box.component';
import { TypesOfGiftsComponent } from './features/home-components/types-of-gifts/types-of-gifts.component';
import { ChannelsOfCommunicationComponent } from './features/home-components/channels-of-communication/channels-of-communication.component';
import { HomeComponentsComponent } from './features/home-components/home-components.component';
import { AboutUsComponent } from './features/home-components/about-us/about-us.component';
import { ContactUsComponent } from './features/home-components/contact-us/contact-us.component';
import { FooterComponentComponent } from './core/footer-component/footer-component.component';
import { LeadersComponentComponent } from './features/home-components/leaders-component/leaders-component.component';

import { ItemInfoCardComponent } from './shared/item-info-card/item-info-card.component';

import { LeadersPageComponent } from './features/pages/leaders-page/leaders-page.component';
import { LeaderCardComponent } from './features/pages/leaders-page/leader-card/leader-card.component';
import { LeadersInfoComponent } from './features/pages/leaders-page/leaders-info/leaders-info.component';
import { GiftsPageComponent } from './features/pages/gifts-page/gifts-page.component';
import { InformationPageComponent } from './features/information-page/information-page.component';
import { ToolsPageComponent } from './features/pages/tools-page/tools-page.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { MainInfoCardComponent } from './shared/main-info-card/main-info-card.component';
import { IntroSectionComponent } from './features/home-components/intro-section/intro-section.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { AboutUsPageComponent } from './features/pages/about-us-page/about-us-page.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/components/user-management/user-management.component';
import { SettingsComponent } from './admin/components/settings/settings.component';
import { DashNavigationComponent } from './admin/components/dashboard/dash-navigation/dash-navigation.component';
import { DashCardComponent } from './admin/components/dashboard/dash-card/dash-card.component';
import { DashTabComponent } from './admin/components/dashboard/dash-tab/dash-tab.component';
import { DashGiftsComponent } from './admin/components/dashboard/categories/dash-gifts/dash-gifts.component';
import { DashToolsComponent } from './admin/components/dashboard/categories/dash-tools/dash-tools.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    IntroBannerComponent,
    JourneyCardComponent,
    ContentBoxComponent,
    TypesOfGiftsComponent,
    ChannelsOfCommunicationComponent,
    HomeComponentsComponent,
    AboutUsComponent,  
    ContactUsComponent,
    FooterComponentComponent,
    LeadersComponentComponent,
    ItemInfoCardComponent,
    LeadersPageComponent,
    LeaderCardComponent,
    LeadersInfoComponent,
    GiftsPageComponent,
    InformationPageComponent,
    ToolsPageComponent,
    SideNavComponent,
    MainInfoCardComponent,
    IntroSectionComponent,
    AboutUsPageComponent,
    DashboardComponent,
    UserManagementComponent,
    SettingsComponent,
    DashNavigationComponent,
    DashCardComponent,
    DashTabComponent,
    DashGiftsComponent,
    DashToolsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    AuthModule,
    SharedModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
