import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';
import { DirectiveNgcontentComponent } from './directive-ngcontent/directive-ngcontent.component';
import { YellowBackgroundDirective } from './shared/yellow-background.directive';
import { DirectiveYellowbackgroundComponent } from './directive-yellowbackground/directive-yellowbackground.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent,
    DirectiveNgcontentComponent,
    YellowBackgroundDirective,
    DirectiveYellowbackgroundComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
