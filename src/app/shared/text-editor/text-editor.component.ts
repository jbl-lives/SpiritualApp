
import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  public Editor = ClassicEditor; // Set Editor to the default ClassicEditor
  public editorData = '<p>Start typing here...</p>'; // Editor data with ngModel
}

