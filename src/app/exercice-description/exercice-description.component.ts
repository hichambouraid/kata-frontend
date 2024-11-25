import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercice-description',
  templateUrl: './exercice-description.component.html',
  styleUrls: ['./exercice-description.component.css']
})
export class ExerciceDescriptionComponent {
  number: number | null = null;
  result: string = '';

  // Simule l'appel au backend pour l'instant
  onSubmit(form: NgForm): void {
    if (form.valid && this.number !== null) {
      // Simule la transformation (backend remplacé ici par une simple logique)
      this.result = `Résultat transformé pour ${this.number}: FOO (exemple)`;
      form.reset(); // Réinitialise le formulaire après soumission
    }
  }
}
