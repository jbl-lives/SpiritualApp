import { Component, TemplateRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextEditorComponent } from '../../../../../shared/text-editor/text-editor.component';
import { NotificationService } from '../../../../../shared/services/notification-service.service';
import { GiftService } from '../../dash-services/gift.service';
import { Gift } from '../../dash-models/gift.model';
import { GiftResponse } from '../../dash-models/gift.model';

@Component({
  selector: 'app-dash-gifts',
  templateUrl: './dash-gifts.component.html',
  styleUrls: ['./dash-gifts.component.css']
})
export class DashGiftsComponent implements AfterViewInit {
  gifts: Gift[] = [];
  giftForm: FormGroup;
  editingGift: Gift | null = null;
  selectedFileName: string | null = null;
  selectedFile: File | null = null;
  giftPictureUrl: string = '';
  currentPage = 1;
  totalPages = 1;
  giftsCount: number = 0;
  pageSize: number = 5;
  

  tabItems = [
    { id: 0, label:  'View Gifts' },
    { id: 1, label: 'Create New Gift' }
  ];
  tabContentTemplates: TemplateRef<any>[] = [];
  activeTabIndex: number = 0;

  isEditing: boolean = false;
  isCreating: boolean = true;

  @ViewChild('firstTabContent') firstTabContent!: TemplateRef<any>;
  @ViewChild('secondTabContent') secondTabContent!: TemplateRef<any>;
  @ViewChild(TextEditorComponent) textEditorComponent!: TextEditorComponent; 

  constructor(
    private cdr: ChangeDetectorRef, 
    private fb: FormBuilder, 
    private notificationService: NotificationService,
    private giftService: GiftService) {
        this.giftForm = this.fb.group({
          name: [''],
          category: [''],
          info: [''],
          image: [null]
      });
  }

  ngOnInit(): void {
      this.loadGifts();
  }

  ngAfterViewInit() {
    this.tabContentTemplates = [this.firstTabContent, this.secondTabContent];
    this.cdr.detectChanges(); // Trigger change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
  }

  // Resetting  the form
  resetForm(): void {
    console.log("Gift form reset called");

    if (this.textEditorComponent) {
        this.textEditorComponent.setContent(''); // Clear the rich text editor
    }

    this.giftForm.reset(); // Reset the form
    this.giftForm.patchValue({ image: null }); // Clear the file input
  }
  ////////////////////////////////////////////////////
 

  loadGifts(callback?: () => void): void {
    this.giftService.getGifts(this.currentPage, this.pageSize).subscribe(
        (response: GiftResponse) => {
            console.log("API Response: ", response); // Debugging
            this.gifts = response.data; // Ensure this updates with new data
            this.totalPages = response.totalPages; // Ensure this updates dynamically
            this.giftsCount = response.totalItems; // Correct total count
            if (callback) callback();
        },
        (error) => {
            console.error('Error loading gifts:', error);
        }
    );
  }

 

  getImageUrl(imagePath: string | File): string {
    if (!imagePath) return '/assets/default.jpg';
    if (imagePath instanceof File) return URL.createObjectURL(imagePath);
    return imagePath.startsWith('http') ? imagePath : `http://localhost:5003/${imagePath}`;
  }
 
  
  ////////////////////////////////////////////////////
  // Code for creating a new gift 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
    this.selectedFileName = this.selectedFile ? this.selectedFile.name : null;
    if (this.selectedFile) {
      this.giftForm.patchValue({ image: this.selectedFile });
    }
  }

  onDescriptionChange(content: string) {
    this.giftForm.patchValue({ info: content });
  }

  onCreateGift(): void {
    const formData = new FormData();
    formData.append('Name', this.giftForm.get('name')?.value); // Capitalize Name
    formData.append('Category', this.giftForm.get('category')?.value); // Capitalize Category
    formData.append('Info', this.giftForm.get('info')?.value); // Change description to Info
   // formData.append('Image', this.giftForm.get('image')?.value); // Capitalize Image
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.giftService.createGift(formData).subscribe({
        next: (response) => {
            console.log('Gift added successfully', response);
            this.notificationService.show("Gift added successfully")
            this.resetForm()
            this.activeTabIndex = 0;
            this.loadGifts();
            // Add UI feedback (e.g., success message)
        },
        error: (error) => {
            console.error('Error adding gift', error);
            this.notificationService.show("Error adding gift"+ error)
            this.resetForm()
            // Add UI feedback (e.g., error message)
        }
    });
  }
  ////////////////////////////////////////////////////
  // Code for deleting a gift
  onDeleteGift(gift: Gift): void {
    if (confirm(`Are you sure you want to delete ${gift.name}?`)) {
        this.giftService.deleteGift(gift.id).subscribe(() => {
            console.log(`Gift ${gift.name} deleted successfully.`);
            this.loadGifts(); // Reload gifts after deletion
        }, error => {
            console.error('Error deleting gift:', error);
        });
    }
  }

  ////////////////////////////////////////////////////
  // Code for updating gift
  startEdit(gift: Gift): void {
    this.editingGift = gift;
    this.isEditing = true;
    this.isCreating = false;
    this.giftService.getGift(gift.id).subscribe(fetchedGift => {
        this.giftForm.patchValue({
            name: fetchedGift.name,
            category: fetchedGift.category,
            info: fetchedGift.info,
            image: null // Reset image input
        });

        // Set the giftPictureUrl
      if (fetchedGift.imagePath) {
        this.giftPictureUrl = this.getImageUrl(fetchedGift.imagePath);
      } else {
        this.giftPictureUrl = ''; // Or set a default placeholder
      }
    });
    this.onTabSelected(1);
    this.cdr.detectChanges();

    setTimeout(() => {
      if (this.textEditorComponent) {
          this.textEditorComponent.setContent(gift.info || '');
      }
   }, 100);
   
  }

  cancelUpdate(): void {
    this.isEditing = false;
    this.isCreating = true;
    this.editingGift = null;
    this.resetForm();
    this.activeTabIndex = 0;
    this.loadGifts();
  }

  onUpdateGift(): void {
    if (this.editingGift) {
        const formData = new FormData();
        formData.append('Name', this.giftForm.get('name')?.value);
        formData.append('Category', this.giftForm.get('category')?.value);
        formData.append('Info', this.giftForm.get('info')?.value);

        // Only append image if one is selected
        if (this.selectedFile) {
            formData.append('Image', this.selectedFile, this.selectedFile.name);
        }

        this.giftService.updateGift(this.editingGift.id, formData).subscribe(() => {
            this.notificationService.show("Gift updated successfully");
            this.editingGift = null;
            this.resetForm();
            this.activeTabIndex = 0;
            this.loadGifts();
        }, error => {
            this.notificationService.show(error);
        });
    }
  }

  onTabSelected(tabId: number): void {
    this.activeTabIndex = tabId;
    if (tabId === 1 && !this.isEditing) {
      this.resetForm();
      this.isCreating = true;
      this.editingGift = null;
    }
  }
  
  submitForm() {
    if (this.isCreating) {
      this.onCreateGift();
    } else if (this.isEditing && this.editingGift) {
      this.onUpdateGift();
    }
  }

  // Pagination code/////
  
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.giftsCount / this.pageSize);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
        this.currentPage--;
        this.loadGifts();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
        this.currentPage++;
        console.log("Next Page:", this.currentPage); // Debugging
        this.loadGifts();
    }
  }

}
 