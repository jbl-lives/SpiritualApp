import { Component, TemplateRef, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormsModule, FormControl  } from '@angular/forms';
import { ToolService } from '../../dash-services/tool.service';
import { ToolResponse } from '../../dash-services/tool.service'; // Import ToolResponse interface (if you have one)
import { TextEditorComponent } from '../../../../../shared/text-editor/text-editor.component';
import { MatSnackBar } from '@angular/material/snack-bar';


// Define the Tool interface
export interface Tool {
    id?: number;
    name: string | null;
    category: string | null;
    description: string | null; // Rich text content
    imagePath: string | null;
}

@Component({
    selector: 'app-dash-tools',
    templateUrl: './dash-tools.component.html',
    styleUrls: ['./dash-tools.component.css']
})
export class DashToolsComponent implements OnInit, AfterViewInit {
    tabItems = [
        { id: 0, label: 'View Tools' },
        { id: 1, label: 'Create New Tool' }
    ];
    tabContentTemplates: TemplateRef<any>[] = [];
    activeTabIndex: number = 0;

    @ViewChild('firstTabContent') firstTabContent!: TemplateRef<any>;
    @ViewChild('secondTabContent') secondTabContent!: TemplateRef<any>;

    toolForm!: FormGroup;
    tools: Tool[] = [];
    selectedFileName: string | null = null;
    selectedFile: File | null = null; // Store the selected File object
    isEditing: boolean = false;
    toolToUpdate: Tool | null = null;
    isCreating: boolean = true;
    toolsCount: number = 0;
    pageSize: number = 10;
    currentPage: number = 1;
    totalPages: number = 0;
    
    @ViewChild(TextEditorComponent) textEditorComponent!: TextEditorComponent;

    constructor(
        private toolService: ToolService,
        private fb: FormBuilder,
        private cdr: ChangeDetectorRef,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.initializeForm();
        this.loadTools();
        this.snackBar.open('Welcome To Tools!', 'Close', { duration: 3000 }); // Display snackbar
    }

    ngAfterViewInit(): void {
        this.tabContentTemplates = [this.firstTabContent, this.secondTabContent];
        this.cdr.detectChanges();
    }

    private initializeForm(): void {
        this.toolForm = new FormGroup({
            tool: new FormControl('', Validators.required),
            category: new FormControl('', Validators.required),
            description: new FormControl(''),
            imagePath: new FormControl('')
          });
    }

    private loadTools(): void {
        this.toolService.getTools().subscribe(
            (response: ToolResponse) => {
                this.tools = response.tools;
                this.toolsCount = response.totalCount;
                this.calculateTotalPages();
                console.log("Tools data:", this.tools);
            },
            (error) => {
                console.error('Error loading tools:', error);
            }
        );
    }
    
    onFileSelected(event: any) {
        const file: File = event.target.files[0]; // Type the file variable
      
        if (file) {
          this.selectedFileName = file.name;
          this.selectedFile = file; // Ensure this is set *before* any other operations
      
          console.log("File Selected (inside if):", this.selectedFile); // Log inside the if
      
          this.toolForm.patchValue({ imagePath: file.name }); // For display purposes only
        } else {
          this.selectedFileName = null; // Reset if no file is selected
          this.selectedFile = null;
          console.log("No file selected");
        }
      
        console.log("File Selected (after if):", this.selectedFile); // Log after the if
      }

    submitForm(): void {
        if (this.toolForm.valid && this.isCreating) {
          const formData = new FormData();
          formData.append('name', this.toolForm.get('tool')?.value); // Correct field name
          formData.append('category', this.toolForm.get('category')?.value);
      
          const richTextContent = this.textEditorComponent.getRichTextContent();
          formData.append('info', richTextContent);
      
          if (this.selectedFile) {
            console.log("Selected File:", this.selectedFile); // Add this line
            formData.append('image', this.selectedFile, this.selectedFile.name);
          }
      
            console.log('Form Data Before Submission:', formData);
            formData.forEach((value, key) => console.log(key, value));
      
          this.toolService.createTool(formData).subscribe({
            next: (createdTool) => {
                console.log("Tool created successfully:", createdTool);
                this.snackBar.open('Tool created successfully!', 'Close', { duration: 3000 }); // Display snackbar
              // ... (rest of your code)
            },
            error: (error) => {
                console.error("Error creating tool:", error);
                this.snackBar.open('Error creating tool. Please try again.', 'Close', { duration: 3000 });
            }
          });
        } else {
          console.log('Form is invalid.');
        }
      }
    

    onUpdateTool(): void {
      if (this.toolForm.valid && this.toolToUpdate?.id) {
          const formData = new FormData();
          formData.append('id', this.toolToUpdate.id.toString());
          formData.append('name', this.toolForm.get('tool')?.value);
          formData.append('category', this.toolForm.get('category')?.value);

          const richTextContent = this.textEditorComponent.getRichTextContent();
              formData.append('description', richTextContent);

          if (this.selectedFile) {
              formData.append('image', this.selectedFile, this.selectedFile.name);
          }

          this.toolService.updateTool(this.toolToUpdate.id, formData).subscribe({
              next: () => {
                  console.log('Tool updated successfully');
                  this.isEditing = false;
                  this.toolToUpdate = null;
                  this.resetForm();
                  this.activeTabIndex = 0;
                  this.loadTools();
              },
              error: (error) => console.error('Error updating tool', error)
          });
      }
    }


    startEdit(tool: Tool): void {
        this.isEditing = true;
        this.isCreating = false;
        this.toolToUpdate = { ...tool };

        this.toolForm.patchValue({
            tool: tool.name || '',
            category: tool.category || '',
            description: tool.description || '',
            imagePath: tool.imagePath || '',
        });
        // Set the rich text editor content:
        setTimeout(() => { // VERY IMPORTANT: Use setTimeout
            this.textEditorComponent.setContent(tool.description || '');
        });
        this.onTabSelected(1); // Switch to the edit tab
    }

    private handleImageUpload(tool: any, callback: () => void) {
        if (this.selectedFile) {
            if (tool && tool.id) {
                this.toolService.uploadImage(this.selectedFile, tool.id).subscribe({
                    next: (imageResponse: any) => {
                        console.log("Image uploaded:", imageResponse);
                        callback();
                    },
                    error: (imageError: any) => {
                        console.error('Error uploading file:', imageError);
                        callback();
                    }
                });
            } else {
                console.error("Tool or ID is undefined. Cannot upload image.");
                callback();
            }
        } else {
            callback();
        }
    }

    resetForm(): void {
        this.toolForm.reset();
        this.selectedFileName = null;
        this.selectedFile = null;
        this.initializeForm();
    }

    getImageUrl(imagePath: string): string {
        return `${this.toolService.ApiUrl}/${imagePath}`;
    }

    onDeleteTool(tool: Tool): void {
        if (!tool.id) {
            console.error("tool.id is undefined");
            return;
        }

        if (confirm("Are you sure you want to delete this tool?")) {
            this.toolService.deleteTool(tool.id).subscribe({
                next: () => {
                    console.log("Tool deleted successfully");
                    this.loadTools();
                },
                error: (error) => {
                    console.error("Error deleting tool:", error);
                }
            });
        }
    }

    onTabSelected(tabId: number): void {
        this.activeTabIndex = tabId;

        if (tabId === 1 && !this.isEditing) { // Only reset if NOT editing
            this.resetForm();
            this.isCreating = true;
            this.toolToUpdate = null;
        }
    }

    onDescriptionChange(content: string) {
        console.log('Quill Content Change:', content);
        this.toolForm.get('description')?.setValue(content); // Ensure form field updates
        this.toolForm.patchValue({ description: content });
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
            this.loadTools();
        }
    }

    calculateTotalPages() {
        this.totalPages = Math.ceil(this.toolsCount / this.pageSize);
    }
}