import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Opciones', url: '/opciones', icon: 'settings' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help-circle' },
  ];
  constructor() {}
}
