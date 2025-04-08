import {Component, OnInit} from '@angular/core';
import {Editor, NgxEditorModule} from 'ngx-editor';
import {NgxFileDropEntry, NgxFileDropModule} from 'ngx-file-drop';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-steps-form',
  imports: [
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
    MatCheckboxModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './steps-form.component.html',
  styleUrl: './steps-form.component.css'
})
export class StepsFormComponent implements OnInit {
  teams = ['abcs', 'defg'];
  countries = ['Canada', 'Kazakhstan', 'USA'];
  states = ['Toronto', 'Almaty', 'Texas'];
  currencies = ['USD', 'Tg', 'EUR'];
  currency = this.currencies[0];

  editor!: Editor;
  editor2!: Editor;

  ngOnInit() {
    this.editor = new Editor();
    this.editor2 = new Editor();
  }

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }
}
