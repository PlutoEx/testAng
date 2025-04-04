import {Component, OnInit} from '@angular/core';
import {RequestStore} from '../../data-access/requests.store'
import {MatDialog} from '@angular/material/dialog';
import {RequestFormComponent} from '../request-form/request-form.component';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  standalone: false,
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
