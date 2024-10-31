import { Component } from '@angular/core';




@Component({
  selector: 'app-leaders-page',
  templateUrl: './leaders-page.component.html',
  styleUrl: './leaders-page.component.css'
})
export class LeadersPageComponent {
  sangomaRed:string = "#ab3424";
  propheticBlue:string = "#005c86";
  mediumOrange:string =  "#ba5400";
  seerPurple :string = "#7a74a7"

  leaderSideNavItems = [
    { item: 'Traditional Healer', image: '../../../../assets/icons/gifts/sangoma-light.png' , backgroundColor :this.sangomaRed },
    { item: 'Prophetic', image: '../../../../assets/icons/gifts/prophetic-light.png' , backgroundColor :this.propheticBlue},
    { item: 'Medium', image: '../../../../assets/icons/gifts/medium-light.png' , backgroundColor :this.mediumOrange },
    { item: 'Seer', image: '../../../../assets/icons/gifts/seer-light.png'  , backgroundColor : this.seerPurple}
  ];

  leaderInfo = [
    {
      name: 'Credo Mutwa', image: '../../../../assets/images/leaders/credo.jpg',giftColor: this.sangomaRed,
      bio: '',
      socials: ['']
    },

    {
      name: 'Gogo Dineo Nhlanzi', image: '../../../../assets/images/dineo.png',giftColor: this.sangomaRed,
      bio: '',
      socials: ['']
    },

    {
      name: 'Mkhulu Nsingiswa', image: '../../../../assets/images/leaders/ntsingiswa1.png',giftColor: this.seerPurple,
      bio: '',
      socials: ['']
    },
    {
      name: 'Gogo Moyo', image: '../../../../assets/images/leaders/skhotheni.jpg',giftColor: this.propheticBlue,
      bio: '',
      socials: ['']
    }
    ,
    {
      name: 'Gogo Moyo', image: '../../../../assets/images/leaders/gogo-moyo.jpg',giftColor: this.propheticBlue,
      bio: '',
      socials: ['']
    }
    ,
    {
      name: 'Gogo Moyo', image: '../../../../assets/images/leaders/velaphi.webp',giftColor: this.propheticBlue,
      bio: '',
      socials: ['']
    }
    ,
    {
      name: 'Gogo Bathini Mbatha', image: '../../../../assets/images/leaders/bathini.jpg',giftColor: this.propheticBlue,
      bio: '',
      socials: ['']
    }
    ,
    {
      name: 'Gogo Moyo', image: '../../../../assets/images/leaders/gogo-moyo.jpg',giftColor: this.propheticBlue,
      bio: '',
      socials: ['']
    }
    ,
    {
      name: 'Gogo Moyo', image: '../../../../assets/images/leaders/gogo-moyo.jpg',giftColor: this.propheticBlue,
      bio: '',
      socials: ['']
    }
    ,
    {
      name: 'Gogo Moyo', image: '../../../../assets/images/leaders/gogo-moyo.jpg',giftColor: this.propheticBlue,
      bio: '',
      socials: ['']
    }
  ]


}
