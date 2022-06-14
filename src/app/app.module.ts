import { InjectionToken, NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegistrationPageComponent } from './auth/registration-page/registration-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ActiveComponent } from './active/active.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import {
  FooterComponent,
  HeaderComponent
} from './shared';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { ConfigService } from './shared/services/config.service';
import { AuthService } from './shared/services/auth-service';




const routes: Routes = [
  {path: '',component: AuthLayoutComponent, children: [
    {path:'', redirectTo: '/login',pathMatch:'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'reg', component: RegistrationPageComponent}
  ]},
  {path: '',component: SiteLayoutComponent , children: [
    //{ path: '', redirectTo: '/acttive', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', component: NotFoundComponent }
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    HomeComponent,
    ProfileComponent,
    ActiveComponent,
    NotFoundComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    AuthLayoutComponent,
    SiteLayoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
		ConfigService,
    AuthService,
		{
			provide: APP_INITIALIZER,
			useFactory: (conf: ConfigService) => {
				return () => conf.load();
			},
			deps: [ConfigService],
			multi: true
		}
	],
  bootstrap: [AppComponent]
})

export class AppModule { }
