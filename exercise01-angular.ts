/**
 * O botão de adicionar item não atualiza a tela imediatamente.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <ul>
      <li *ngFor="let it of list">{{ it }}</li>
    </ul>

    <input [(ngModel)]="newItem" />
    <button (click)="addItem()">Adicionar</button>
  `
})
export class ItemComponent {
  @Input() list: string[] = [];
  newItem = '';

  addItem() {
    if (this.newItem) {
      this.list = [...this.list, this.newItem];
      this.newItem = '';
    }
  }
}
