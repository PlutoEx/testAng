import {Component, Inject} from '@angular/core';
import {RequestStore, Request} from '../../data-access/requests.store';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-request-form',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css'
})
export class RequestFormComponent {
  form: FormGroup;

  constructor(
    private store: RequestStore,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: { request: Request }) {
    this.form = fb.group({
      id: null,
      name: [null, Validators.required],
      quantity: [null, Validators.required],
      unitPrice: [null, Validators.required]
    })
    if (data) {
      this.form.patchValue(data.request);
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    if (this.data) {
      this.store.editRequest(this.form.value);
    } else {
      this.store.addRequest(this.form.value);
    }
  }

  onDelete() {
    if (this.data) {
      this.store.deleteRequest(this.data.request.id);
    }
  }
}
