import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { orthographyUseCase } from 'src/app/core/use-cases';

@Injectable({
  providedIn: 'root',
})
export class Ai {


  checkOrthography( prompt: string ) {
    return from( orthographyUseCase(prompt) ) ;
  }

}
