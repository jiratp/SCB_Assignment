import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Hammer from 'hammerjs';

// PAGE MODULE
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: ''
  }
];

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: 6, enabled: true   },
      'pinch': { enabled: true },
      'rotate': { enabled: true },
      'touch': { enabled: true }
  };
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
      enable: true,
      domEvents: true,
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
