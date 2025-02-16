import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

declare var Quill: any; // Declare Quill to avoid TypeScript errors

@Component({
  selector: 'app-text-editor',
  template: `<div #editor></div>`,  // No inline styles here!
  styles: [] // Keep styles empty here or add component-specific styles
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorElement: any;
  quill: any;
  @Input() content: string = '';
  @Output() contentChange = new EventEmitter<string>();

  ngAfterViewInit() {
    this.quill = new Quill(this.editorElement.nativeElement, {
      theme: 'snow', // or 'bubble'
      placeholder: 'Write something...',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],        // Basic formatting
          [{ 'header': [1, 2, true] }],         // Headers
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],  // Lists
          [{ 'script': 'sub'}, { 'script': 'super' }],   // Subscript/Superscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],       // Indentation
          [{ 'direction': 'rtl' }],              // Text direction
          [{ 'size': ['small', false, 'large', 'huge'] }], // Font size
          [{ 'color': [] }, { 'background': ['#f0f0f0'] }], // Color
          [{ 'align': [] }],                      // Alignment
          ['clean']                               // Remove formatting
        ]
      }
    });

    if (this.content) {
        try {
          this.quill.setContents(JSON.parse(this.content));
        } catch (error) {
          console.error("Error parsing content:", error);
          this.quill.setContents([{ insert: '\n' }]);
        }

    }

    this.quill.on('text-change', () => {
      const delta = this.quill.getContents();
      const content = JSON.stringify(delta);
      this.contentChange.emit(content);
    });
  }

  ngOnDestroy() {
    if (this.quill) {
      this.quill.off('text-change'); // Remove event listener
      this.quill = null;
    }
  }  

  getRichTextContent(): string {
    return JSON.stringify(this.quill.getContents());
  }

  setContent(content: string) {
    try {
      if (!content) {
        this.quill.setContents([{ insert: '\n' }]); // Default blank content
        return;
      }
      const delta = JSON.parse(content);
      this.quill.setContents(delta);
    } catch (error) {
      console.error("Error parsing content:", error);
      this.quill.setContents([{ insert: '\n' }]);
    }
  }
  
}