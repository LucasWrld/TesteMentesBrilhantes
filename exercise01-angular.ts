/**
 * O botão de adicionar item não atualiza a tela imediatamente.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div>
      <ul>
        <li *ngFor="let it of list; let i = index">{{ i + 1 }}. {{ it }}</li>
      </ul>

      <div style="margin-top:8px;">
        <input [(ngModel)]="newItem" placeholder="Novo item" />
        <button (click)="addItem()">Adicionar</button>
      </div>
    </div>
  `
})
export class ItemComponent {
  @Input() list: string[] = [];
  @Output() listChange = new EventEmitter<string[]>();

  newItem = '';

  addItem() {
    const trimmed = (this.newItem || '').trim();
    if (!trimmed) return;
    const next = [...this.list, trimmed];
    this.listChange.emit(next);
    this.newItem = '';
  }
}
