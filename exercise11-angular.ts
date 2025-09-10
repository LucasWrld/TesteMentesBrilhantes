/**
 * Todos os componentes estão declarados em AppModule, dificultando manutenção e lazy-loading.
 * Reorganize em um DashboardModule, separando os componentes CardComponent, GraphComponent e
 * TableComponent.

 */
import { NgModule, Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// CardComponent
@Component({
  selector: 'app-card',
  template: `
    <div class="box">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  `
})
export class CardComponent {
  @Input() title!: string;
  @Input() content!: string;
}

// GraphComponent
@Component({
  selector: 'app-graph',
  template: `
    <div class="box">
      <h2>Gráfico</h2>
      <canvas id="graph"></canvas>
    </div>
  `
})
export class GraphComponent {}

// TableComponent
@Component({
  selector: 'app-table',
  template: `
    <div class="box">
      <h2>Histórico</h2>
      <table>
        <tbody>
          <tr *ngFor="let row of rows">
            <td *ngFor="let cell of row">{{ cell }}</td>
          </tr>
          <tr *ngIf="!rows.length">
            <td>Carregando...</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class TableComponent {
  @Input() rows: any[] = [];
}

// DashboardComponent
@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <app-card title="Resumo" content="Dados resumidos..."></app-card>
      <app-graph></app-graph>
      <app-table></app-table>
    </div>
  `
})
export class DashboardComponent {}

// AppComponent
@Component({
  selector: 'app-root',
  template: `<app-dashboard></app-dashboard>`
})
export class AppComponent {}

// AppModule
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    GraphComponent,
    TableComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
