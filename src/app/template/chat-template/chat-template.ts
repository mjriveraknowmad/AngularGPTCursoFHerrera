import { Component, inject, signal } from '@angular/core';
import { Message } from 'src/app/interfaces';
import { ChatMessage, MyMessage, TypingLoader, TextMessageBox } from '@components/index';
import { Ai } from 'src/app/presentation/services/ai';

@Component({
  selector: 'app-chat-template',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBox],
  templateUrl: './chat-template.html'
})
export class ChatTemplate {

  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject( Ai );



  handleMessage( prompt: string ) {

    console.log({ prompt });

  }

  // handleMessageWithFile( { prompt, file }: TextMessageEvent ) {

  //   console.log({ prompt, file });

  // }

  // handleMessageWithSelect( event: TextMessageBoxEvent ) {
  //   console.log(event);
  // }

}
