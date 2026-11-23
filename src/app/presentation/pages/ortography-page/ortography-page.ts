import { Component, inject, signal } from '@angular/core';
import { Message } from '../../../interfaces';
import { ChatMessage, MyMessage, TextMessageBoxEvent, TextMessageEvent, TextMessageBoxSelect, TextMessageBoxFile, TextMessageBox } from '@components/index';
import { TypingLoader } from '@components/typing-loader/typing-loader';
import { GtMessageOrthography } from '@components/chat-bubbles/gt-message-orthography/gt-message-orthography';
import { Ai } from '../../services/ai';

@Component({
  selector: 'app-ortography-page',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBoxSelect, TextMessageBox, TextMessageBoxFile, GtMessageOrthography],
  templateUrl: './ortography-page.html',
  styleUrl: './ortography-page.css',
})
export default class OrtographyPage {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public iaService = inject(Ai);


  handleMessage( prompt: string ) {

    this.isLoading.set(true);

    this.messages.update( (prev) => [
      ...prev,
      {
        isGpt: false,
        text: prompt
      }
    ]);


    this.iaService.checkOrthography( prompt )
      .subscribe( resp => {
        this.isLoading.set(false);

        this.messages.update( prev => [
          ...prev,
          {
            isGpt: true,
            text: resp.message,
            info: resp,
          }
        ])

      })



  }



}
