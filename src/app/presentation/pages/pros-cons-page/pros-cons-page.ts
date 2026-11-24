import { Component, inject, signal } from '@angular/core';
import { Message } from 'src/app/interfaces';
import { Ai } from '../../services/ai';
import { ChatMessage, MyMessage, TypingLoader, TextMessageBox } from '@components/index';

@Component({
  selector: 'app-pros-cons-page',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBox],
  templateUrl: './pros-cons-page.html',
  styleUrl: './pros-cons-page.css',
})
export default class ProsConsPage {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public aiService = inject(Ai);

  handleMessage(prompt: string) {
    this.messages.update((prev) => [
      ...prev,
      {
        isGpt: false,
        text: prompt,
      },
    ]);

    this.isLoading.set(true);
    this.aiService.prosConsDiscusser(prompt).subscribe((resp) => {
      this.isLoading.set(false);
      this.messages.update((prev) => [
        ...prev,
        {
          isGpt: true,
          text: resp.content,
        },
      ]);
    });
  }
}
