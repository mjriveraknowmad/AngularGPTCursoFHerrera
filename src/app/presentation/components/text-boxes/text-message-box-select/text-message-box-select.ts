import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxEvent{
  prompt: string;
  selectedOption: string;
}


@Component( {
  selector: 'app-text-message-box-select',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './text-message-box-select.html'
} )
export class TextMessageBoxSelect{

  placeholder = input<string>();
  options = input.required<Option[]>();
  onMessage = output<TextMessageBoxEvent>();


  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
    selectedOption: ['', Validators.required ]
  });


  handleSubmit() {
    if ( this.form.invalid ) return;

    const { prompt, selectedOption } = this.form.value;
    const event: TextMessageBoxEvent = {prompt: prompt!, selectedOption:selectedOption! }
    this.onMessage.emit(event);
    this.form.reset();

  }
}
