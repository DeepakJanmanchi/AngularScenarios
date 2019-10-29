import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ChildComponent } from './Scene 3/child/child.component';
import { ParentComponent } from './Scene 3/parent/parent.component';
import { GrandchildComponent } from './Scene4/grandchild/grandchild.component';
import { GrandparentComponent } from './Scene4/grandparent/grandparent.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    ChildComponent,
    ParentComponent,
    GrandchildComponent,
    GrandparentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
