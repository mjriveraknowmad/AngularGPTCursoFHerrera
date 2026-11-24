import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { orthographyUseCase, prosConsStreamUseCase, prosConsUseCase } from 'src/app/core/use-cases';

@Injectable({
  providedIn: 'root',
})
export class Ai {
  checkOrthography(prompt: string) {
    return from(orthographyUseCase(prompt));
  }

  prosConsDiscusser(prompt: string) {
    return from(prosConsUseCase(prompt));
  }

  prosConsStreamDiscusser(prompt: string, abortSignal: AbortSignal) {
    return prosConsStreamUseCase(prompt, abortSignal);
  }
}
