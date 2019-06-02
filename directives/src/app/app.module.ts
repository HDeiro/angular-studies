import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
