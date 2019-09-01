import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      console.error(error);
      // redirect to home
      // TODO add 404 componenet
      this.router.navigate(['']); 
    };
  }
}
