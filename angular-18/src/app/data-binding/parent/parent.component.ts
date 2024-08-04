import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMsg : string = "Good morning!";
 
  childMsg:string='';


  receiveMessage(msg: string) {
    this.childMsg=msg;
    console.log(msg);
    console.log('Received from child:', this.childMsg);
  }

}
