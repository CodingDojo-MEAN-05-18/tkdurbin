import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  boxArray = [];

  fillBoxArray() {
    for (let y = 0; y < 20; y++) {
      const randNum = (Math.floor(Math.random() * 12) ) + 1;
      if (randNum === 1) {
        this.boxArray.push('Red');
      } else if (randNum === 2) {
        this.boxArray.push('OrangeRed');
      } else if (randNum === 3) {
        this.boxArray.push('Orange');
      } else if (randNum === 4) {
        this.boxArray.push('SandyBrown');
      } else if (randNum === 5) {
        this.boxArray.push('Yellow');
      } else if (randNum === 6) {
        this.boxArray.push('YellowGreen');
      } else if (randNum === 7) {
        this.boxArray.push('Green');
      } else if (randNum === 8) {
        this.boxArray.push('SeaGreen');
      } else if (randNum === 9) {
        this.boxArray.push('Blue');
      } else if (randNum === 10) {
        this.boxArray.push('BlueViolet');
      } else if (randNum === 11) {
        this.boxArray.push('Purple');
      } else if (randNum === 12) {
        this.boxArray.push('MediumVioletRed');
      }
    }
  }

  ngOnInit() {
    this.fillBoxArray();
  }

}
