/**
 * Melhore o código abaixo
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div [ngSwitch]="status">
      <div *ngSwitchCase="'error'">Erro!</div>
      <div *ngSwitchCase="'success'">Sucesso!</div>
      <div *ngSwitchCase="'warning'">Atenção!</div>
      <div *ngSwitchDefault></div>
    </div>
  `
})
export class ItemComponent {
  status: string;
}
