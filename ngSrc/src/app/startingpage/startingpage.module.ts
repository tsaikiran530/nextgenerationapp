import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartingpageComponent } from './startingpage.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
     StartingpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StartingpageComponent]
})
export class StartingpageModule { }
