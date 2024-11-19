import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  template: `
    <editor 
      apiKey="ertb25f0jdoak734qaqhgu72do60you4fz1yci6jptu90er0"
      [init]="editorConfig"
      [(ngModel)]="editorContent">
    </editor>
  `,
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  editorContent: string = '<p>Start typing here...</p>'; // Initial content for the editor
  editorConfig = {
    plugins: [
      'anchor', 'autolink', 'charmap', 'codesample', 'image', 'link', 
      'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic underline strikethrough | link image media | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
  };
}
