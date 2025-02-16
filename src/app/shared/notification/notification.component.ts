import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.css'
})
  
export class NotificationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
