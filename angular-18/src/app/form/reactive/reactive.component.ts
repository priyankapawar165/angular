import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    }
  }

}
