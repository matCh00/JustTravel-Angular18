import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DatePicker} from 'primeng/datepicker';

@Component({
  selector: 'app-trip-dialog-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputText,
    Button,
    DatePicker
  ],
  templateUrl: './trip-dialog-form.component.html',
  styleUrl: './trip-dialog-form.component.scss'
})
export class TripDialogFormComponent {

  private ref: DynamicDialogRef = inject(DynamicDialogRef);
  private fb: FormBuilder = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    location: [null, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]],
  })

  onSubmit() {
    this.ref.close(this.form.value);
    this.form.reset();
  }

  onClose() {
    this.ref.close(null);
  }

}
