import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const materialModules = [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: materialModules,
})
export class MaterialModule {}
