import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent,CommonModule,FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() message: any;

  newMsg :string ='Helloooooo';

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  sendMessage() { 
    //console.log('tetwet' +msg)
    this.notify.emit(this.newMsg);
  }

}
