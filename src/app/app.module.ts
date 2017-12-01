import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GraphQlModule } from './apollo.config';
import { LinkItemComponent } from './link-item/link-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkItemComponent
  ],
  imports: [
    BrowserModule,
    GraphQlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
