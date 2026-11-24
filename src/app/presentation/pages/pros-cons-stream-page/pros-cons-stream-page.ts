import { Component, inject, signal } from '@angular/core';
import { Message } from 'src/app/interfaces';
import { Ai } from '../../services/ai';
import { ChatMessage, MyMessage, TypingLoader, TextMessageBox } from '@components/index';

@Component({
  selector: 'app-pros-cons-stream-page',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBox],
  templateUrl: './pros-cons-stream-page.html',
  styleUrl: './pros-cons-stream-page.css',
})
export default class ProsConsStreamPage {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public aiService = inject(Ai);
  public abortSignal = new AbortController();

  async handleMessage(prompt: string) {
    this.abortSignal.abort(); // abortamos cualquier stream anterior en curso
    this.abortSignal = new AbortController(); // creamos un nuevo AbortController para el nuevo stream

    this.messages.update((prev) => [
      ...prev,
      {
        isGpt: false,
        text: prompt,
      },
      {
        isGpt: true,
        text: '...',
      },
    ]);

    this.isLoading.set(true);
    const stream = this.aiService.prosConsStreamDiscusser(prompt, this.abortSignal.signal); // Solo crea el generador. El verdadero trabajo ocurre en el for await donde se pausa en cada iteración esperando más datos del servidor.
    this.isLoading.set(false);

    for await (const text of stream) {
      // Cada iteración espera a que llegue el siguiente chunk.
      // Es aquí donde se espera el contenido parcial del mensaje del stream.
      this.handleStreamResponse(text);
      //(repite hasta que done = true). Sale del loop cuando el stream termina
    }
  }

  handleStreamResponse(message: string) {
    this.messages().pop();
    const messages = this.messages();

    this.messages.set([...messages, { isGpt: true, text: message }]);
  }
}
