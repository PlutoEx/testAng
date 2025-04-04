import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsFormComponent} from './features/steps-form/steps-form.component';
import {RouterModule, Routes} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {NgxEditorModule} from 'ngx-editor';
import {NgxFileDropModule} from 'ngx-file-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: StepsFormComponent
  }
]

@NgModule({
  declarations: [StepsFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    NgxEditorModule,
    NgxFileDropModule,
    MatCheckboxModule
  ],
  providers: [provideNativeDateAdapter()]
})
export class FormModule {
}
