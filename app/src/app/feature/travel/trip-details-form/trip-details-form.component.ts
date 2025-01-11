import {Component, inject, OnInit} from '@angular/core';
import {ControlContainer, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DatePicker} from 'primeng/datepicker';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-trip-details-form',
  standalone: true,
  imports: [
    DatePicker,
    InputText,
    ReactiveFormsModule
  ],
  templateUrl: './trip-details-form.component.html',
  styleUrl: './trip-details-form.component.scss'
})
export class TripDetailsFormComponent implements OnInit {

  parentForm!: FormGroup;


  private controlContainer: ControlContainer = inject(ControlContainer);


  ngOnInit() {
    this.parentForm = this.controlContainer.control as FormGroup;
  }

}
