import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: materialModules
})
export class MaterialModule {}
