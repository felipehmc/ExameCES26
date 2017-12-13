import { Injectable } from '@angular/core';
import { Devedor } from './devedor';
import { DEVEDORES } from './mock-devedores';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class DevedorService {
	
  getDevedor(id: number): Observable<Devedor> {
    this.messageService.add(`DevedorService: buscado devedor de id=${id}`);
    return of(DEVEDORES.find(devedor => devedor.id === id));
  }
	
  getDevedores(): Observable<Devedor[]> {
    this.messageService.add('DevedorService: devedores buscados');
    return of(DEVEDORES);
  }

  constructor(private messageService: MessageService) { }

}
