import {Component, OnInit} from '@angular/core';
import {Editor} from 'ngx-editor';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {NgxFileDropEntry} from 'ngx-file-drop';

@Component({
  selector: 'app-steps-form',
  standalone: false,
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
  html = '';

  ngOnInit() {
    this.editor = new Editor();
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
