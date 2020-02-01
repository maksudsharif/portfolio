import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {PortfolioBodyComponent} from './components/portfolio-body/portfolio-body.component';
import {SummaryComponent} from './components/summary/summary.component';
import {WorkExperienceComponent} from './components/work-experience/work-experience.component';
import {SkillsComponent} from './components/skills/skills.component';
import {EducationComponent} from './components/education/education.component';
import {LanguagesComponent} from './components/languages/languages.component';
import {InterestsComponent} from './components/interests/interests.component';
import {SkillItemComponent} from './components/skill-item/skill-item.component';
import {ProfileService} from './services/profile/profile.service';
import {ClearanceComponent} from './components/clearance/clearance.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    FooterComponent,
    HeaderComponent,
    PortfolioBodyComponent,
    SummaryComponent,
    WorkExperienceComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    InterestsComponent,
    SkillItemComponent,
    ClearanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
