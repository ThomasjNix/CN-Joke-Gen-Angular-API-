import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { OutputComponent } from './output/output.component';
import { CreditsComponent } from './credits/credits.component';
import { AboutComponent } from './about/about.component';
import { CategoriesService } from './categories.service';
import { GetJokeService } from './get-joke.service';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    OutputComponent,
    CreditsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CategoriesService, GetJokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
