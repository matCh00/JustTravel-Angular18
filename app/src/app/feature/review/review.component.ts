import {Component} from '@angular/core';
import {ReviewListComponent} from './review-list/review-list.component';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    ReviewListComponent
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

}
