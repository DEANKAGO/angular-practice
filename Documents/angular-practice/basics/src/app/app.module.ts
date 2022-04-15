import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterPolationComponent } from './inter-polation/inter-polation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayayDataBindingComponent } from './two-wayay-data-binding/two-wayay-data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponentComponent } from './component-data-binding/parent-component/parent-component.component';
import { ChildComponentComponent } from './component-data-binding/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InterPolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayayDataBindingComponent,
    StructuralDirectivesComponent,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
