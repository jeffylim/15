import { Component } from '@angular/core';
import { MyDet } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dets:MyDet[] = [];
  constructor(){
    for (let index = 0; index < 10; index++) {
      this.dets.push(new MyDet(index + 1, `Датчик номер: ${index + 1}`));
    }
  }

  onDelete(item:MyDet): void{
    this.dets.splice(this.dets.indexOf(item), 1);
  }
  onAdd(name:string):void{
    if(name == ''){
      name = `Датчик номер ${this.dets.length + 1}`
      this.dets.push(new MyDet(this.dets.length + 1, name));
    }
    else{
      this.dets.push(new MyDet(this.dets.length + 1, name));
    }
  }
  onDeleteAll(){
    this.dets.splice(0, this.dets.length);
  }
}
