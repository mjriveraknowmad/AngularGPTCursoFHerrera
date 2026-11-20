import { Component, signal } from '@angular/core';
import { Message } from '../../../interfaces';
import { ChatMessage, MyMessage, TextMessageBoxEvent, TextMessageEvent, TextMessageBoxSelect, TextMessageBoxFile, TextMessageBox } from '@components/index';
import { TypingLoader } from '@components/typing-loader/typing-loader';

@Component({
  selector: 'app-ortography-page',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBoxSelect, TextMessageBox, TextMessageBoxFile],
  templateUrl: './ortography-page.html',
  styleUrl: './ortography-page.css',
})
export default class OrtographyPage {
  public messages = signal<Message[]>([ { text: 'Hola Mundo', isGpt: false } ]);
  public isLoading = signal(false);

  handleMessage( prompt: string ) {

    console.log({ prompt });

  }

  handleMessageWithFile( { prompt, file }: TextMessageEvent ) {

    console.log({ prompt, file });

  }

  handleMessageWithSelect( event: TextMessageBoxEvent ) {
    console.log(event);
  }
}
