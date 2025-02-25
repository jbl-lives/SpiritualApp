import { Component, OnInit } from '@angular/core';
import { GiftService } from '../../../admin/components/dashboard/dash-services/gift.service';
import { Gift } from '../../../admin/components/dashboard/dash-models/gift.model';

@Component({
  selector: 'app-gifts-page',
  templateUrl: './gifts-page.component.html',
  styleUrls: ['./gifts-page.component.css']
})
export class GiftsPageComponent implements OnInit {
  gifts: Gift[] = [];
  filteredGifts: Gift[] = []; // For displaying filtered items
  selectedCategory: string = 'All'; // Default to show all gifts


  giftItems = [
    { item: 'All', image: '../../../../assets/icons/gifts/all.png', backgroundColor: '#333' }, 
    { item: 'Traditional Healer', image: '../../../../assets/icons/gifts/sangoma-light.png', backgroundColor: '#ab3424' },
    { item: 'Prophetic', image: '../../../../assets/icons/gifts/prophetic-light.png', backgroundColor: '#005c86' },
    { item: 'Psychic', image: '../../../../assets/icons/gifts/medium-light.png', backgroundColor: '#ba5400' },
    { item: 'Seer', image: '../../../../assets/icons/gifts/seer-light.png', backgroundColor: '#7a74a7' }
  ];


  constructor(private giftService: GiftService) {}

  ngOnInit(): void {
    this.fetchGifts(); // Fetch gifts first
  }
  

  // Basic fetching of gifts from the database
  fetchGifts(): void {
    this.giftService.getGifts().subscribe({
      next: (response) => {
        this.gifts = response.data; // Ensure this matches API response
        this.filterGifts(); // Now run filtering after data is available
      },
      error: (err) => {
        console.error('Error fetching gifts:', err);
      }
    });
  }
  

  // This helps to turn quill text to string
  extractText(info: string | undefined): string {
    if (!info) return '';  // Handle undefined values
  
    try {
      const parsed = JSON.parse(info); // Convert string to object
      return parsed.ops.map((op: any) => op.insert).join(''); // Extract text content
    } catch (error) {
      console.error('Error parsing Quill Delta:', error);
      return info; // Fallback to raw string
    }
  }


  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterGifts();
  }

  filterGifts(): void {
    if (this.selectedCategory === 'All') {
      this.filteredGifts = this.gifts;
    } else {
      this.filteredGifts = this.gifts.filter(
        (gift) => gift.category === this.selectedCategory
      );
    }
  }
  
}
