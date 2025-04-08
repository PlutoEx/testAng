import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsFormComponent} from './features/steps-form/steps-form.component';
import {RouterModule, Routes} from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: StepsFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [provideNativeDateAdapter()]
})
export class FormModule {
}
