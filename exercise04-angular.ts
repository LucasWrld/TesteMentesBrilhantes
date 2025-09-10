/**
 * Evite vazamento de memória
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyService } from './my.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-item',
})
export class ItemComponent implements OnInit, OnDestroy {

  items: string[] = [];
  private destroy$ = new Subject<void>();

  constructor(private service: MyService) {}

  ngOnInit() {
    this.service
      .getData()
      .pipe(takeUntil(this.destroy$)) // garante o unsubscribe
      .subscribe((data: any) => {
        this.items = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
