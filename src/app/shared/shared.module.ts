// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../core/button/button.component';
import { RouterModule } from '@angular/router';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms'; 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { NotificationComponent } from './notification/notification.component';
import { SideNavComponent } from '../core/side-nav/side-nav.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SideNavComponent,
    TextEditorComponent,
    NotificationComponent,
    LoadingIndicatorComponent,
    TruncatePipe,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // ✅ Added here
    RouterModule,
    CKEditorModule,
    NgxPaginationModule ,
  ],
  exports: [
    TextEditorComponent,
    ButtonComponent,
    SideNavComponent,
    LoadingIndicatorComponent,
    NgxPaginationModule,
    TruncatePipe,
    FormsModule,
    ReactiveFormsModule,  // ✅ Added here
    RouterModule 
  ]
})
export class SharedModule { }