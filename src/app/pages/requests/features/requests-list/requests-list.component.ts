import {Component, OnInit} from '@angular/core';
import {RequestStore} from '../../data-access/requests.store'
import {MatDialog} from '@angular/material/dialog';
import {RequestFormComponent} from '../request-form/request-form.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-requests-list',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './requests-list.component.html',
  styleUrl: './requests-list.component.css'
})
export class RequestsListComponent implements OnInit {
  displayedColumns = ['name', 'quantity', 'unitPrice', 'totalPrice', 'actions'];

  constructor(protected store: RequestStore, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.store.loadRequests().subscribe();
  }

  editRequest(id: string) {
    const request = this.store.requests().find(request => request.id === id) || null;

    const ref = this.dialog.open(RequestFormComponent, {
      data: {request}
    });

    ref.afterClosed().subscribe(() => {
      this.store.updateRequests().subscribe();
    })
  }

  createRequest() {
    const ref = this.dialog.open(RequestFormComponent);
    ref.afterClosed().subscribe(() => {
      this.store.updateRequests().subscribe();
    })
  }

  deleteRequest(id: string) {
    this.store.deleteRequest(id);
  }
}
