/**
 * O botão de adicionar item não atualiza a tela imediatamente.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
})
export class ItemComponent {

  @Input() list: string[] = [];

  add(item: string) {
    // Em vez de só dar push, criamos uma nova lista
    this.list = [...this.list, item];
  }

}
