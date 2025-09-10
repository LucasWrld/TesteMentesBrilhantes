/**
 * Evite vazamento de memória
 */
import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-item',
})
export class ItemComponent implements OnInit {

	items: string[] = [];

	constructor(private service: MyService) {}

	ngOnInit() {
		this.service
			.getData()
			.subscribe((data: any) => {
				this.items = data;
			});
	}

}