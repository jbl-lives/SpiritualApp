// notification.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationOverlayId = 'notification-overlay';

  constructor() {}

  show(message: string): void {
    this.createNotificationOverlay(message);
  }

  private createNotificationOverlay(message: string): void {
    // Create overlay if not already present
    let overlay = document.getElementById(this.notificationOverlayId);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = this.notificationOverlayId;
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '1000';

      const notificationBox = document.createElement('div');
      notificationBox.style.backgroundColor = '#ffffff';
      notificationBox.style.color = '#333';
      notificationBox.style.padding = '20px';
      notificationBox.style.borderRadius = '10px';
      notificationBox.style.textAlign = 'center';
      notificationBox.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.3)';
      notificationBox.style.width = '80%';
      notificationBox.style.maxWidth = '400px';

      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      messageElement.style.margin = '0 0 20px 0';

      const button = document.createElement('button');
      button.textContent = 'OK';
      button.style.padding = '10px 20px';
      button.style.backgroundColor = '#4caf50';
      button.style.color = '#fff';
      button.style.border = 'none';
      button.style.borderRadius = '5px';
      button.style.cursor = 'pointer';
      button.style.fontSize = '16px';

      // Close the notification on button click
      button.addEventListener('click', () => {
        overlay?.remove();
      });

      notificationBox.appendChild(messageElement);
      notificationBox.appendChild(button);
      overlay.appendChild(notificationBox);
      document.body.appendChild(overlay);
    }
  }
}
