import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),BrowserAnimationsModule,BrowserModule,NgModule,importProvidersFrom(HttpClientModule),provideHttpClient(withFetch()),provideAnimations() ]
};

