import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Felipe Hora';
  dataAniversario = new Date(1987, 8, 25);
  preco = 12855.32;
  troco = 0.57392;

}
