/**
 * Melhore o código abaixo
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
	<div *ngIf="status === 'error'">Erro!</div>
	<div *ngIf="status === 'success'">Sucesso!</div>
	<div *ngIf="status === 'warning'">Atenção!</div>
  `
})
export class ItemComponent {

	status: string;

}