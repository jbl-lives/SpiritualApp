// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../core/button/button.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CKEditorModule
  ],
  exports: [
    TextEditorComponent,
    ButtonComponent
  ]
})
export class SharedModule { }