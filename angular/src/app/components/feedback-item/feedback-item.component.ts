import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrl: './feedback-item.component.css',
})
export class FeedbackItemComponent {
  @Input() data!: any;
}
