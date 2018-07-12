import { Component, OnInit } from '@angular/core';
import { DataService } from '../task.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  data: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.data.subscribe(
      (data) => { this.data = data; }
    );
  }

}
