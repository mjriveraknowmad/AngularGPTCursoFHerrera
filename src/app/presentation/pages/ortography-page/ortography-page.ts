import { Component, signal } from '@angular/core';
import { Message } from '../../../interfaces';
import { ChatMessage, MyMessage } from '@components/index';

@Component({
  selector: 'app-ortography-page',
  imports: [ChatMessage, MyMessage],
  templateUrl: './ortography-page.html',
  styleUrl: './ortography-page.css',
})
export default class OrtographyPage {
  public messages = signal<Message[]>([ { text: 'Hola Mundo', isGpt: false } ]);
}
