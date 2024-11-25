import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciceDescriptionComponent } from './exercice-description/exercice-description.component';
import { ValueInputComponent } from './value-input/value-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceDescriptionComponent,
    ValueInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
