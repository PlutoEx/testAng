import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RequestsListComponent
} from './features/requests-list/requests-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: RequestsListComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RequestsModule {
}
