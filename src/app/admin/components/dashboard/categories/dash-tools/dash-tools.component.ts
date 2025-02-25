import { Component, TemplateRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextEditorComponent } from '../../../../../shared/text-editor/text-editor.component';
import { NotificationService } from '../../../../../shared/services/notification-service.service';
import { ToolService } from '../../dash-services/tool.service';
import { Tool } from '../../dash-models/tool.model';
import { ToolResponse } from '../../dash-models/tool.model';

@Component({
  selector: 'app-dash-tools',
  templateUrl: './dash-tools.component.html',
  styleUrls: ['./dash-tools.component.css']
})
export class DashToolsComponent implements AfterViewInit {
  tools: Tool[] = [];
  toolForm: FormGroup;
  editingTool: Tool | null = null;
  selectedFileName: string | null = null;
  selectedFile: File | null = null;
  toolPictureUrl: string = '';
  currentPage = 1;
  totalPages = 1;
  toolsCount: number = 0;
  pageSize: number = 5;
  
  tabItems = [
    { id: 0, label:  'View Tools' },
    { id: 1, label: 'Create New Tool' }
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
    private toolService: ToolService) {
        this.toolForm = this.fb.group({
          name: [''],
          category: [''],
          info: [''],
          image: [null]
      });
  }

  ngOnInit(): void {
      this.loadTools();
  }

  ngAfterViewInit() {
    this.tabContentTemplates = [this.firstTabContent, this.secondTabContent];
    this.cdr.detectChanges(); // Trigger change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
  }

  resetForm(): void {
    console.log("Tool form reset called");
    if (this.textEditorComponent) {
        this.textEditorComponent.setContent(''); // Clear the rich text editor
    }
    this.toolForm.reset();
    this.toolForm.patchValue({ image: null });
  }
  
  loadTools(callback?: () => void): void {
    this.toolService.getTools(this.currentPage, this.pageSize).subscribe(
        (response: ToolResponse) => {
            console.log("API Response: ", response);
            this.tools = response.data;
            this.totalPages = response.totalPages;
            this.toolsCount = response.totalItems;
            if (callback) callback();
        },
        (error) => {
            console.error('Error loading tools:', error);
        }
    );
  }

  getImageUrl(imagePath: string | File): string {
    if (!imagePath) return '/assets/default.jpg';
    if (imagePath instanceof File) return URL.createObjectURL(imagePath);
    return imagePath.startsWith('http') ? imagePath : `http://localhost:5003/${imagePath}`;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
    this.selectedFileName = this.selectedFile ? this.selectedFile.name : null;
    if (this.selectedFile) {
      this.toolForm.patchValue({ image: this.selectedFile });
    }
  }

  onDescriptionChange(content: string) {
    this.toolForm.patchValue({ info: content });
  }

  onCreateTool(): void {
    const formData = new FormData();
    formData.append('Name', this.toolForm.get('name')?.value);
    formData.append('Category', this.toolForm.get('category')?.value);
    formData.append('Info', this.toolForm.get('info')?.value);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.toolService.createTool(formData).subscribe({
        next: (response) => {
            console.log('Tool added successfully', response);
            this.notificationService.show("Tool added successfully");
            this.resetForm();
            this.activeTabIndex = 0;
            this.loadTools();
        },
        error: (error) => {
            console.error('Error adding tool', error);
            this.notificationService.show("Error adding tool"+ error);
            this.resetForm();
        }
    });
  }

  onDeleteTool(tool: Tool): void {
      if (confirm(`Are you sure you want to delete ${tool.name}?`)) {
          this.toolService.deleteTool(tool.id).subscribe(() => {
              console.log(`Gift ${tool.name} deleted successfully.`);
              this.loadTools(); // Reload gifts after deletion
          }, error => {
              console.error('Error deleting gift:', error);
          });
      }
  }

  startEdit(tool: Tool): void {
      this.editingTool= tool;
      this.isEditing = true;
      this.isCreating = false;
      this.toolService.getTool(tool.id).subscribe(fetchedTool => {
          this.toolForm.patchValue({
              name: fetchedTool.name,
              category: fetchedTool.category,
              info: fetchedTool.info,
              image: null // Reset image input
          });
  
          // Set the giftPictureUrl
        if (fetchedTool.imagePath) {
          this.toolPictureUrl = this.getImageUrl(fetchedTool.imagePath);
        } else {
          this.toolPictureUrl = ''; // Or set a default placeholder
        }
      });
      this.onTabSelected(1);
      this.cdr.detectChanges();
  
      setTimeout(() => {
        if (this.textEditorComponent) {
            this.textEditorComponent.setContent(tool.info || '');
        }
     }, 100);
     
    }
  
    cancelUpdate(): void {
      this.isEditing = false;
      this.isCreating = true;
      this.editingTool = null;
      this.resetForm();
      this.activeTabIndex = 0;
      this.loadTools();
    }
  
    onUpdateTool(): void {
      if (this.editingTool) {
          const formData = new FormData();
          formData.append('Name', this.toolForm.get('name')?.value);
          formData.append('Category', this.toolForm.get('category')?.value);
          formData.append('Info', this.toolForm.get('info')?.value);
  
          // Only append image if one is selected
          if (this.selectedFile) {
              formData.append('Image', this.selectedFile, this.selectedFile.name);
          }
  
          this.toolService.updateTool(this.editingTool.id, formData).subscribe(() => {
              this.notificationService.show("Gift updated successfully");
              this.editingTool = null;
              this.resetForm();
              this.activeTabIndex = 0;
              this.loadTools();
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
        this.editingTool = null;
      }
    }
    
    submitForm() {
      if (this.isCreating) {
        this.onCreateTool();
      } else if (this.isEditing && this.editingTool) {
        this.onUpdateTool();
      }
    }
  
    // Pagination code/////
    
    calculateTotalPages() {
      this.totalPages = Math.ceil(this.toolsCount / this.pageSize);
    }
  
    goToPreviousPage() {
      if (this.currentPage > 1) {
          this.currentPage--;
          this.loadTools();
      }
    }
  
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
          this.currentPage++;
          console.log("Next Page:", this.currentPage); // Debugging
          this.loadTools();
      }
    }
}
