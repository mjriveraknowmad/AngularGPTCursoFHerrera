import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gt-message-orthography',
  imports: [],
  templateUrl: './gt-message-orthography.html',
  styleUrl: './gt-message-orthography.css',
})
export class GtMessageOrthography {

  userScore = input.required<number>();
  text = input.required<string>();
  errors = input<string[]>([]);

}
