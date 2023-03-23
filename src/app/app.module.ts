import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { LicenseSectionComponent } from './components/license-section/license-section.component';
import { DataFilterComponent } from './components/data-filter/data-filter.component';
import { DataDigramComponent } from './components/data-digram/data-digram.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FooterComponent } from './components/footer/footer.component';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    NavBarComponent,
    SettingsComponent,
    DigitalClockComponent,
    LicenseSectionComponent,
    DataFilterComponent,
    DataDigramComponent,
    NotificationsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
