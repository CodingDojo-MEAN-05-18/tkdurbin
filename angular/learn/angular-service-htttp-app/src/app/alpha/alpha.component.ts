import { Component, OnInit } from '@angular/core';
import { DataService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.data.subscribe(
      (data) => { this.data = data; }
    );
  }

}
