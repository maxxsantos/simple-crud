import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudComponent } from './crud/crud.component';
import { MatCardModule,
         MatButtonModule,
         MatIconModule,
         MatListModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatRadioModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
