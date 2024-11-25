import { Component } from '@angular/core';
import { ValueConverterService } from '../services/value-converter.service';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.css']
})
export class ValueInputComponent {
  number: number | null = null;
  result: string = '';

  constructor(private valueConverterService: ValueConverterService) {}

  onSubmit(form: any): void {
    if (form.valid && this.number !== null) {
      this.valueConverterService.convertValue(this.number).subscribe({
        next: (response) => {
          this.result = response; // Met à jour le résultat
        },
        error: (err) => {
          console.error('Error during the conversion :', err);
          this.result = 'Error during the conversion';
        },
      });
    }
  }
}
