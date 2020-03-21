import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(200)
      ]), transition('* => void',
      animate(200, style({opacity: 0})))
    ])
  ]
})
export class AppComponent {
  showMenu = false;
  body = document.querySelector('body');

  openMenu(): void {
    this.body.style.overflow = 'hidden';
    this.showMenu = true;
  }
  closeMenu(): void {
    this.body.style.overflow = 'auto';
    this.showMenu = false;
  }


}
