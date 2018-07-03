import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.retrieveData();
  }
  retrieveData() {
    this.http.get('https://000000000000000000000000.mockapi.io/task').subscribe(
      (data: any[]) => { this.data.next(data); }
    );
  }

  addData(newData: any) {
    this.http.post('https://000000000000000000000000.mockapi.io/task').subscribe(
      (response) => { this.retrieveData(); }
    );
  }

  // updatData(newData: any): void {
    // const temData = this.data.getValue();
    // temData.push(newData);
    // this.data.next(temData);
    // this.http.get('http://api-url').subscribe((task: any[]) => { this.updateTask(task););

}
