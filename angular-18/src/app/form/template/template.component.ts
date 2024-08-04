import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  model = {
    name: ''
    };

  onSubmit() {
    console.log('Form Submitted!', this.model);
  }
}
