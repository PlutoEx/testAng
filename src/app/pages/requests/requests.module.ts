import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RequestsListComponent
} from './features/requests-list/requests-list.component';
import {RouterModule, Routes} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {
  RequestFormComponent
} from './features/request-form/request-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: RequestsListComponent}
]

@NgModule({
  declarations: [RequestsListComponent, RequestFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class RequestsModule {
}
