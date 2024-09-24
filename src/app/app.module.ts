import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
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
import { ToolsComponentComponent } from './features/tools-component/tools-component.component';
import { ToolCardComponent } from './features/tools-component/tool-card/tool-card.component';
import { ItemInfoCardComponent } from './shared/item-info-card/item-info-card.component';
import { PlacesCardComponent } from './features/tools-component/places-card/places-card.component';
import { LeadersPageComponent } from './features/leaders-page/leaders-page.component';
import { LeaderCardComponent } from './features/leaders-page/leader-card/leader-card.component';
import { LeadersInfoComponent } from './features/leaders-page/leaders-info/leaders-info.component';
import { GiftsPageComponent } from './features/gifts-page/gifts-page.component';

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
    ToolsComponentComponent,
    LeadersComponentComponent,
    ToolCardComponent,
    ItemInfoCardComponent,
    PlacesCardComponent,
    LeadersPageComponent,
    LeaderCardComponent,
    LeadersInfoComponent,
    GiftsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
