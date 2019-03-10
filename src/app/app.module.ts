import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./_shared/shared/shared.module";
import { MaterialModule } from "./_shared/material/material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
