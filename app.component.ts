import { Component } from '@angular/core';

import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result: any;
  list: any;
  check:boolean= false
  constructor(private store: ServiceService) {
    console.log('yes');

    this.store.getTodoList().subscribe({
      next: (res) => {
        this.result = res;
        // this.checked()
      },
      error: (err) => {},
    });
  }

  // checked() {
  //   this.result.filter((res: any) => {
  //     if (res.completed == true) {
  //  this.check= true
  //     }
  //   });
  // }
}
